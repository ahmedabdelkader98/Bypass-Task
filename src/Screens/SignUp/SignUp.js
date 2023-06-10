import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ScrollViewBase,
} from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { CreateUser_API } from '../../APIs/APIs';
import { useMutation } from 'react-query';
import PrimaryButtonComponent from '../../Components/PrimaryButtonComponent/PrimaryButtonComponent';
import TextFieldComponent from '../../Components/TextFieldComponent/TextFieldComponent';
import { useNavigation } from '@react-navigation/native';
import { ContextHandler } from '../../Context/ContextHandler';

const SignUp = () => {
  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true);
  const [loading, setIsLoading] = useState(false);
  const { showUpTopNotificationBarContext } = useContext(ContextHandler);
  const [signupPayload, setSignupPayload] = useState({
    username: '',
    email: '',
    password: '',
    returnSecureToken: true,
  });
  useEffect(() => {
    if (
      signupPayload.username &&
      signupPayload.email &&
      signupPayload.password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [signupPayload.username, signupPayload.email, signupPayload.password]);
  const SignUpMutation = useMutation('CreateUser_API', {
    mutationFn: CreateUser_API,
    onMutate: () => {
      setIsLoading(true);
    },
    onError: () => {
      setIsLoading(false);
      showUpTopNotificationBarContext('Error in Registeration', 'red');
    },
    onSuccess: (data) => {
      if (data?.status) {
        setIsLoading(false);
        showUpTopNotificationBarContext(
          'Account Created Successfuly',
          '#00A76E'
        );
        navigation.replace('Home');
      } else {
        setIsLoading(false);
        showUpTopNotificationBarContext('Error in Registeration', 'orange');
      }
    },
  });
  return (
    <ScrollView style={{}}>
      <TextFieldComponent
        label="Username"
        value={signupPayload.username}
        onChangeText={(value) => {
          var temppayload = { ...signupPayload };
          temppayload.username = value;
          setSignupPayload({ ...temppayload });
        }}
        name="Create your username"
      />
      <TextFieldComponent
        label="E-mail"
        value={signupPayload.email}
        onChangeText={(value) => {
          var temppayload = { ...signupPayload };
          temppayload.email = value;
          setSignupPayload({ ...temppayload });
        }}
        name="Enter your e-mail"
      />
      <TextFieldComponent
        label="Password"
        value={signupPayload.password}
        onChangeText={(value) => {
          var temppayload = { ...signupPayload };
          temppayload.password = value;
          setSignupPayload({ ...temppayload });
        }}
        name="Create your password"
        type="password"
      />
      <PrimaryButtonComponent
        loading={loading}
        disabled={disabled}
        style={styles.primaryBtn}
        onPress={() => {
          SignUpMutation.mutate(signupPayload);
        }}
        label={'Sign Up'}
      />
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  primaryBtn: {
    width: 165,
    marginTop: '25%',
  },
  primaryBtn: {
    width: '90%',
    marginTop: '8%',
  },
});
