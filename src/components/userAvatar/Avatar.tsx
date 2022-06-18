import { Image, StyleSheet } from 'react-native'
import React from 'react';
// theme
import { themeValues } from '../../themeValues';

// provitional user Image
const userAvatarimg = 'https://randomuser.me/api/portraits/men/75.jpg'

const Avatar = () => {
  return (
    <Image source={{ uri: userAvatarimg }} style={styles.avatar} />
  )
}

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: themeValues.colors.white.whiteSimple,
    borderWidth: 1
  }
})