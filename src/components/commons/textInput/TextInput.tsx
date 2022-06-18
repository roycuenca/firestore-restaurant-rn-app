import React from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
// theme
import { themeValues } from '../../../themeValues';

interface Props {
  label?: string,
  placeholder: string,
  hidePassword?: boolean
};

const TextInputComponent = ({ label, placeholder, hidePassword }: Props) => {
  const requireLabelText = label && <Text style={styles.labelText}>{label}</Text>
  return (
    <View>
      {requireLabelText}
      <TextInput placeholder={placeholder} style={styles.input} secureTextEntry={hidePassword} />
    </View>
  )
};

export default TextInputComponent;

const styles = StyleSheet.create({
  labelText: {
    fontSize: 17,
    fontWeight: '400',
    color: themeValues.colors.white.whiteSimple,
  },
  input: {
    backgroundColor: themeValues.colors.white.whiteWithOpacity,
    width: '100%',
    height: 40,
    borderColor: themeValues.colors.white.whiteSimple,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginBottom: 20,
  }
})