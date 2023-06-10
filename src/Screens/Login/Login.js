import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { Login_API } from '../../APIs/APIs';
import { useMutation } from 'react-query';
import TextFieldComponent from '../../Components/TextFieldComponent/TextFieldComponent';
import PrimaryButtonComponent from '../../Components/PrimaryButtonComponent/PrimaryButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { ContextHandler } from '../../Context/ContextHandler';

const Login = () => {
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true);
  const [loading, setIsLoading] = useState(false);
  const { showUpTopNotificationBarContext } = useContext(ContextHandler);
  const [loginpPayload, setloginpPayload] = useState({
    email: '',
    password: '',
    returnSecureToken: true,
  });
  useEffect(() => {
    if (loginpPayload.email && loginpPayload.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [loginpPayload.email, loginpPayload.password]);

  const LoginMutation = useMutation('Login_API', {
    mutationFn: Login_API,
    onMutate: () => {
      setIsLoading(true);
    },
    onError: () => {
      setIsLoading(false);
      showUpTopNotificationBarContext('Invalid email or password', 'red');
    },
    onSuccess: (data) => {
      setIsLoading(false);
      if (data?.status) {
        showUpTopNotificationBarContext('Logged in Successfuly', '#00A76E');
        navigation.replace('Home');
      } else {
        setIsLoading(false);
        showUpTopNotificationBarContext('Invalid email or password', 'orange');
      }
    },
  });
  return (
    <ScrollView>
      <TextFieldComponent
        label="Username or E-mail"
        value={loginpPayload.email}
        onChangeText={(value) => {
          var temppayload = { ...loginpPayload };
          temppayload.email = value;
          setloginpPayload({ ...temppayload });
        }}
        name="Username or E-mail"
      />
      <TextFieldComponent
        label="Password"
        value={loginpPayload.password}
        onChangeText={(value) => {
          var temppayload = { ...loginpPayload };
          temppayload.password = value;
          setloginpPayload({ ...temppayload });
        }}
        name="Password"
        type="password"
      />
      <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
        <Text style={styles.forgetpasswordstyle}>Forget Password?</Text>
      </TouchableOpacity>
      <PrimaryButtonComponent
        loading={loading}
        disabled={disabled}
        style={styles.primaryBtn}
        onPress={() => {
          LoginMutation.mutate(loginpPayload);
        }}
        label={'Login'}
      />
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  primaryBtn: {
    width: 165,
    marginTop: '25%',
  },
  forgetpasswordstyle: {
    color: '#3E3E3E',
    alignSelf: 'flex-end',
    marginTop: 25,
    marginEnd: '5%',
    fontSize: 14,
    fontWeight: '400',
  },
  primaryBtn: {
    width: '90%',
    marginTop: '8%',
  },
});
