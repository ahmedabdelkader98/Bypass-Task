import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import ToastComponent from '../../Components/ToastComponent/ToastComponent';
import { Feather } from '@expo/vector-icons';
import { googleAPIKey, placeType } from '../../../GooglePlacesAPI';
import axios from 'axios';
import RecommendPlacesComponent from '../../Components/RecommendPlacesComponent/RecommendPlacesComponent';

const Home = () => {
  const latitude = 30.033333;
  const longitude = 31.233334;
  let radius = 5 * 1000;
  const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    latitude +
    ',' +
    longitude +
    '&radius=' +
    radius +
    '&type=' +
    placeType +
    '&key=' +
    googleAPIKey;
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setHotels(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  const [tabsarray, settabsarray] = useState([
    {
      id: 1,
      tabname: 'Recommend',
      ischecked: true,
    },
    {
      id: 2,
      tabname: 'Popular',
      ischecked: false,
    },
    {
      id: 3,
      tabname: 'Trending',
      ischecked: false,
    },
  ]);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onPress={() => {
          var temptabarray = [...tabsarray];
          temptabarray.forEach(function (arrayitem) {
            arrayitem.ischecked = false;
          });
          temptabarray[index].ischecked = true;
          settabsarray([...temptabarray]);
        }}
      >
        <Text
          style={{
            fontWeight: item.ischecked == true ? '700' : '400',
            fontSize: 18,
            color: item.ischecked == true ? '#3E3E3E' : '#A9A9A9',
          }}
        >
          {item.tabname}
        </Text>
        {item.ischecked == true ? <View style={styles.dotstyle}></View> : null}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#E5E5E5"
      />
      <ToastComponent />
      <SafeAreaView />
      <View style={styles.awardiconview}>
        <Feather name="award" size={24} color="#A9A9A9" />
      </View>
      <View style={styles.titlecontainer}>
        <Text style={styles.titlestyle}>Good Morning,</Text>
        <Text style={styles.titlestyle}>Stephanie!</Text>
      </View>
      <View>
        <FlatList
          contentContainerStyle={styles.flatliststyle}
          data={tabsarray}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      <View>
        {tabsarray[0].ischecked && <RecommendPlacesComponent />}
        {tabsarray[1].ischecked && <RecommendPlacesComponent />}
        {tabsarray[2].ischecked && <RecommendPlacesComponent />}
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  awardiconview: {
    alignSelf: 'flex-end',
    marginEnd: '10%',
    marginTop: '10%',
  },
  titlecontainer: {
    flexDirection: 'column',
    marginStart: 25,
    marginTop: '15%',
  },
  titlestyle: {
    fontWeight: '700',
    fontSize: 28,
    color: '#3E3E3E',
  },
  flatliststyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
  },
  dotstyle: {
    marginTop: 8,
    width: 8,
    height: 8,
    borderRadius: 25,
    backgroundColor: '#00A76E',
  },
});
