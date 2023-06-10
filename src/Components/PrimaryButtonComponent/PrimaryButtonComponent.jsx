import { Text, Pressable, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const PrimaryButtonComponent = ({
  textStyle,
  label,
  style,
  disabled,
  loading,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#32b88b' : '#00A76E',
        },
        styles.submitButton,
        (disabled || loading) && { backgroundColor: '#dcdcdc' },
        style,
      ]}
      disabled={disabled || loading}
    >
      {loading && <ActivityIndicator size="small" color="#ffffff" />}
      {!loading && <Text style={[styles.submitText, textStyle]}>{label}</Text>}
    </Pressable>
  );
};

export default PrimaryButtonComponent;
const styles = StyleSheet.create({
  submitButton: {
    width: '85%',
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
    alignSelf: 'center',
  },
  submitText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
  },
});
