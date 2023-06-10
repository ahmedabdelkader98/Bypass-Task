import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import PrimaryButtonComponent from '../../Components/PrimaryButtonComponent/PrimaryButtonComponent';

const OnBoardingScreens = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#E5E5E5"
      />
      <SafeAreaView />
      <View style={styles.imagecontainer}>
        <Image
          source={require('../../../assets/onboarding.png')}
          style={styles.imagestyle}
        />
      </View>
      <View style={styles.paragraghcontainer}>
        <Text style={styles.titlestyle}>Travel with no worry</Text>
        <Text style={styles.subtitlestyle}>
          You can now experience the next level travel experience for hotel
          bookings.
        </Text>
      </View>
      <PrimaryButtonComponent
        style={styles.primaryBtn}
        onPress={() => {
          navigation.replace('Authentication');
        }}
        label={'Next'}
      />
    </View>
  );
};

export default OnBoardingScreens;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  primaryBtn: {
    width: 165,
    marginTop: '25%',
  },
  imagecontainer: {
    marginTop: '8%',
    width: 326,
    height: 402,
    alignSelf: 'flex-start',
  },
  imagestyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  paragraghcontainer: {
    marginHorizontal: 25,
    marginTop: '12%',
  },
  titlestyle: {
    color: '#3E3E3E',
    fontSize: 24,
    fontWeight: '700',
  },
  subtitlestyle: {
    color: 'rgba(62, 62, 62, 0.8)',
    fontSize: 16,
    fontWeight: '400',
    marginTop: '6%',
  },
});
