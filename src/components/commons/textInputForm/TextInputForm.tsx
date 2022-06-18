import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

interface Props {
  placeholder?: string,
  keyboardNumber?: boolean,
  handleOnChange?: any,
}

export const TextInputForm = ({ placeholder, handleOnChange, keyboardNumber }: Props) => {

  const isNumberInput = keyboardNumber ? 'number-pad' : 'default';

  return (
    <TextInput
      placeholder={placeholder}
      style={styles.inputContainer}
      onChangeText={(text) => handleOnChange(text)}
      keyboardType={isNumberInput}
    />)
}


const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 10,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
  },
})