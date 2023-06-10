import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PrimaryButtonComponent from '../../Components/PrimaryButtonComponent/PrimaryButtonComponent';

const Description = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#E5E5E5"
      />
      <SafeAreaView />
      <View style={styles.headerstyle}>
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          name="arrow-back"
          size={32}
          color="#3E3E3E"
        />
        <Text style={styles.headertitle}>Description</Text>
      </View>
      <View style={styles.cardstyle}>
        <View style={styles.cardcontainerview}>
          <View style={styles.imagecontainer}>
            <Image
              source={require('../../../assets/test.png')}
              style={styles.imagestyle}
            />
          </View>
          <View style={styles.cardrightsection}>
            <Text style={styles.hotelname}>Tropicasa De Hotel</Text>
            <Text style={styles.hotellocation}>Amsterdam, Netherlands</Text>
            <View style={styles.reviewcontainer}>
              <AntDesign name="star" size={20} color="#FD9942" />
              <Text style={styles.starsnumber}>4.6</Text>
              <Text style={styles.reviewnumbers}>(1763 Reviews)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.hoteldescription}>
        <View>
          <Text style={styles.description}>
            Tropicasa De Hotel is high rated hotels with 1000+ reviews and we
            are always maintaning the quality for better rating and high
            attitude service for you.
          </Text>
        </View>
        <View style={{ marginTop: '8%' }}>
          <Text style={styles.description}>
            Tropicasa De Hotel located in a strategic location, only 6 Km from
            the airport and 1 Km from the train station. The hotel located in
            the middle of the city so you can enjoy the city and see something
            nearby.
          </Text>
        </View>
        <View style={{ marginTop: '8%' }}>
          <Text style={styles.description}>
            You will be welcomed amongst olive trees, citron trees and
            magnolias, in gardens that hide exotic plants and in a wonderful
            outdoor pool with deck chairs.
          </Text>
        </View>
      </View>
      <PrimaryButtonComponent
        style={styles.primaryBtn}
        onPress={() => {}}
        label={'Book'}
      />
    </ScrollView>
  );
};

export default Description;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  primaryBtn: {
    width: 165,
    marginTop: '25%',
  },
  description: {
    color: 'rgba(62, 62, 62, 0.8)',
    fontWeight: '400',
    fontSize: 14,
  },
  headerstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: '6%',
    marginTop: '8%',
  },
  headertitle: {
    marginStart: 15,
    fontWeight: '700',
    fontSize: 20,
    color: '#3E3E3E',
  },
  cardstyle: {
    width: '85%',
    marginTop: '10%',
    height: 125,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  cardcontainerview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagecontainer: {
    width: 95,
    height: 95,
    marginStart: 12,
  },
  imagestyle: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'contain',
  },
  cardrightsection: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginStart: 12,
    height: '80%',
  },
  hotelname: {
    color: '#3E3E3E',
    fontSize: 18,
    fontWeight: '700',
  },
  hotellocation: {
    color: 'rgba(62, 62, 62, 0.6)',
    fontWeight: '400',
    fontSize: 14,
  },
  reviewcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starsnumber: {
    color: '#FD9942',
    fontSize: 15,
    fontWeight: '600',
  },
  reviewnumbers: {
    color: '#A9A9A9',
    fontWeight: '400',
    fontSize: 14,
  },
  hoteldescription: {
    alignSelf: 'center',
    width: '84%',
    marginTop: '10%',
  },
});
