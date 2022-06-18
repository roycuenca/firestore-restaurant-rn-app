import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// theme
import { themeValues } from '../../../themeValues';

interface Props {
  text: string,
  bg?: string,
  handleOnPress?: () => void,
};

const ButtonComponent = ({ text, bg, handleOnPress }: Props) => {
  const buttonBg = bg ? bg : themeValues.colors.white.whiteWithOpacity
  return (
    <TouchableOpacity style={styles(buttonBg).buttonContainer} onPress={handleOnPress}>
      <Text style={styles().buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;

const styles = (buttonBg?: string) => StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 40,
    borderColor: themeValues.colors.white.whiteWithOpacity,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: buttonBg,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '400',
    color: themeValues.colors.white.whiteSimple
  }
})