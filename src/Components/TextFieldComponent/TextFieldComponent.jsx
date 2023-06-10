import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext, useState } from 'react';

const TextFieldComponent = ({
  name,
  value,
  state,
  keyboardType,
  type,
  style,
  onChangeText,
  maxLength,
  multiline,
  blurOnSubmit,
  label,
  ...props
}) => {
  const [pass, setPass] = useState(true);
  const updateSecureTextEntry = () => {
    setPass(!pass);
  };

  return (
    <>
      <Text style={styles.labelstyle}>{label}</Text>
      <View style={[styles.textfieldView, style]}>
        <View style={styles.textfieldcontent}>
          <TextInput
            style={{
              flex: 1,
            }}
            keyboardType={keyboardType}
            editable={props?.editable}
            maxLength={maxLength}
            name={name}
            id={name}
            type={type}
            onChangeText={onChangeText}
            secureTextEntry={type === 'password' && pass ? true : false}
            value={value}
            placeholder={`${name}`}
            placeholderTextColor="#9391a0"
            autoCapitalize="none"
            {...props}
            multiline={multiline}
            blurOnSubmit={blurOnSubmit}
          />
          {type === 'password' && (
            <Feather
              onPress={updateSecureTextEntry}
              name={pass ? 'eye-off' : 'eye'}
              size={20}
              color="#9391a0"
            />
          )}
        </View>
      </View>
    </>
  );
};
export default TextFieldComponent;
const styles = StyleSheet.create({
  textfieldView: {
    justifyContent: 'center',
    width: '90%',
    height: 55,
    borderRadius: 27.5,
    alignSelf: 'center',
    backgroundColor: '#f8f8fa',
    borderWidth: 0.4,
    borderColor: '#c6c6c8',
    paddingStart: 15,
    paddingEnd: 15,
    marginTop: 15,
  },
  textfieldcontent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelstyle: {
    marginTop: '7%',
    color: '#3E3E3E',
    fontSize: 16,
    fontWeight: '600',
    paddingStart: 20,
  },
});
