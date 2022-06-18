import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import EmojiPicker from 'rn-emoji-keyboard';
import ButtonComponent from '../../components/commons/button/Button';
import { TextInputForm } from '../../components/commons/textInputForm/TextInputForm';
// @theme
import { themeValues } from '../../themeValues';
// @service
import { postProduct } from '../../config/ProductApi'


const initialValues: TProduct = {
  emoji: '😎',
  name: '',
  price: '',
  isSold: false,
  createAt: new Date()

}

const AddProductScreen = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState<TProduct>(initialValues);

  const handlePick = (emojiObject: any) => setNewItem({ ...newItem, emoji: emojiObject.emoji });
  const getProductName = (name: string) => setNewItem({ ...newItem, name: name });
  const getPriceName = (price: string) => setNewItem({ ...newItem, price: price });

  const addProduct = () => {
    postProduct(newItem);
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Product</Text>
      <Text
        style={styles.emoji}
        onPress={() => setIsOpen(true)}
      >{newItem.emoji}
      </Text>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <View style={styles.contentContainer}>
        <TextInputForm placeholder='Product Name' handleOnChange={getProductName} />
      </View>
      <View style={styles.contentContainer}>
        <TextInputForm placeholder='$ Price' handleOnChange={getPriceName} keyboardNumber />
      </View>
      <View style={styles.contentContainer}>
        <ButtonComponent
          text='Publish'
          bg={themeValues.colors.secondary.secondarySimple}
          handleOnPress={addProduct} />
      </View>

    </View>
  )
}

export default AddProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeValues.colors.white.whiteSimple,
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    paddingVertical: 20
  },
  emoji: {
    fontSize: 100,
    borderWidth: 1,
    borderColor: themeValues.colors.white.graySimple,
    borderRadius: 6,
    padding: 10,
    marginVertical: 6
  },
  contentContainer: {
    width: '90%',
    paddingVertical: 10
  }
});