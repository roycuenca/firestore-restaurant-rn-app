import { Image, StyleSheet, View, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
// components
import Avatar from '../../components/userAvatar/Avatar';
import TextInputComponent from '../../components/commons/textInput/TextInput';
import ButtonComponent from '../../components/commons/button/Button';
// theme
import { themeValues } from '../../themeValues';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/Navigation';
import { ROUTES } from '../../navigation/Routes';

// Provitional Image
const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg';


const LoginScreen = () => {
  const navigation = useNavigation();
  const requireHomeRedirect = () => navigation.navigate(ROUTES.home);

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle={styles.containerStyle}>
        <BlurView intensity={100} style={styles.blurView}>
          <View style={styles.contentView}>
            <Avatar />
          </View>
          <View style={styles.inputContent}>
            <TextInputComponent label='Email' placeholder='email@email.com' />
          </View>
          <View style={styles.inputContent}>
            <TextInputComponent label='Password' placeholder='Password' hidePassword />
          </View>
          <View style={styles.buttonContent}>
            <ButtonComponent text='Login' bg={themeValues.colors.primary.primaryWithOpacity} handleOnPress={requireHomeRedirect} />
          </View>
          <View style={styles.buttonContent}>
            <ButtonComponent text='Create Account' bg={themeValues.colors.secondary.secondaryWithOpacity} />
          </View>
        </BlurView>
      </ScrollView>
    </View>
  )
};

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView: {
    paddingTop: 20,
    paddingBottom: 40
  },
  inputContent: {
    width: '90%'
  },
  buttonContent: {
    width: '90%',
    paddingVertical: 10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  containerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurView: {
    width: 350,
    height: 500,
    borderColor: themeValues.colors.white.whiteWithOpacity,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  }
});
