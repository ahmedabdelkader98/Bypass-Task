import { View, StyleSheet, StatusBar, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('OnBoardingScreens');
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
      />
      <View style={styles.main}>
        <View style={styles.imagecontainer}>
          <Image
            source={require('../../../assets/Logo.png')}
            style={styles.imagestyle}
          />
        </View>
        <Image
          source={require('../../../assets/Splash1.png')}
          style={styles.splash1imagestyle}
        />
        <Image
          source={require('../../../assets/Splash2.png')}
          style={styles.splash2imagestyle}
        />
      </View>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00A76E',
    flex: 1,
  },
  main: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  imagecontainer: {
    width: 78,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imagestyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  splash1imagestyle: {
    width: 246,
    height: 327,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    bottom: 0,
    zIndex: 1,
    position: 'absolute',
  },
  splash2imagestyle: {
    width: 246,
    height: 327,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    top: 0,
    zIndex: 1,
    position: 'absolute',
  },
});
