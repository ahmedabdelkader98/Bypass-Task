import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { useState } from 'react';
import Login from '../../Screens/Login/Login';
import SignUp from '../../Screens/SignUp/SignUp';
import ToastComponent from '../ToastComponent/ToastComponent';

const Authentication = ({ navigation }) => {
  const [tabsarray, settabsarray] = useState([
    {
      id: 1,
      tabname: 'Log In',
      ischecked: true,
    },
    {
      id: 2,
      tabname: 'Sign Up',
      ischecked: false,
    },
  ]);
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          height: 66,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          borderBottomWidth: item.ischecked == true ? 3 : 3,
          borderBottomColor: item.ischecked == true ? '#00A76E' : '#ffffff',
          paddingStart: 70,
          paddingEnd: 70,
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
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: item.ischecked == true ? '700' : '600',
            fontSize: 20,
            color: item.ischecked == true ? '#3E3E3E' : '#A9A9A9',
          }}
        >
          {item.tabname}
        </Text>
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
      <SafeAreaView />
      <ToastComponent />
      <View style={styles.imagecontainer}>
        <Image
          source={require('../../../assets/AuthLogo.png')}
          style={styles.imagestyle}
        />
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
        {tabsarray[0].ischecked && <Login />}
        {tabsarray[1].ischecked && <SignUp />}
      </View>
    </View>
  );
};

export default Authentication;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  view: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imagecontainer: {
    width: 78,
    height: 78,
    alignSelf: 'center',
    marginTop: '12%',
  },
  imagestyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flatliststyle: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '10%',
  },
});
