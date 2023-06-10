import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const RecommendPlacesComponent = () => {
  const navigation = useNavigation();
  const [tabsarray, settabsarray] = useState([
    {
      id: 1,
      hotelname: 'Tropicasa De Hotel',
      hotelLocation: 'Amsterdam, Netherlands',
      image: require('../../../assets/hotelimg.png'),
      stars: '4.6',
    },
    {
      id: 2,
      hotelname: 'Luxe Hotel',
      hotelLocation: 'Jakarta, Indonesia',
      image: require('../../../assets/hotelimg.png'),
      stars: '4.4',
    },
    {
      id: 3,
      hotelname: 'Tropicasa De Hotel',
      hotelLocation: 'Amsterdam, Netherlands',
      image: require('../../../assets/hotelimg.png'),
      stars: '5',
    },
  ]);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.cardcontainer}
        onPress={() => {
          navigation.navigate('Description');
        }}
      >
        <View style={styles.imagecontainer}>
          <Image
            resizeMode="contain"
            source={item.image}
            style={styles.imagestyle}
          />
        </View>
        <View style={styles.starscontainer}>
          <AntDesign name="star" size={20} color="#FD9942" />
          <Text style={styles.starsnumber}>{item.stars}</Text>
        </View>
        <View style={styles.hoteltitlecontainer}>
          <Text style={styles.hotelnamestyle}>{item.hotelname}</Text>
          <Text style={styles.hotellocationstyle}>{item.hotelLocation}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatliststyle}
        data={tabsarray}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecommendPlacesComponent;
const styles = StyleSheet.create({
  flatliststyle: {
    marginTop: 10,
  },
  starscontainer: {
    position: 'absolute',
    top: '15%',
    right: '20%',
    borderRadius: 20.5,
    backgroundColor: 'rgba(62, 62, 62, 0.6)',
    width: 74,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cardcontainer: {
    width: 256,
    alignItems: 'center',
    marginStart: 20,
  },
  imagecontainer: {
    width: 275,
    height: 424,
  },
  imagestyle: {
    width: '100%',
    height: '100%',
  },
  starsnumber: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  hoteltitlecontainer: {
    position: 'absolute',
    bottom: '15%',
    alignSelf: 'flex-start',
    marginStart: '10%',
  },
  hotelnamestyle: {
    fontWeight: '700',
    fontSize: 20,
    color: '#ffffff',
  },
  hotellocationstyle: {
    marginTop: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#ffffff',
  },
});
