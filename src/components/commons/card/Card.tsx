import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themeValues } from '../../../themeValues';
import { AntDesign } from '@expo/vector-icons';
import ButtonComponent from '../button/Button';

interface Props {
  id: string,
  emoji: string,
  name: string,
  price: string,
  isSold: boolean,
  onDeleteFn?: any;
};

export const Card = ({
  id,
  emoji,
  name,
  price,
  isSold,
  onDeleteFn
}: Props) => {

  const requireButtonBg = isSold
    ? themeValues.colors.white.graySimple
    : themeValues.colors.secondary.secondaryWithOpacity

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContent}>
        <Text style={styles.emoji}>{emoji}</Text>
        <TouchableOpacity style={styles.iconContent} onPress={() => onDeleteFn(id)}>
          <AntDesign name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <View>
        <ButtonComponent text='Purchase' bg={requireButtonBg} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: themeValues.colors.white.whiteSimple,
    margin: 16,
    borderRadius: 8
  },
  imageContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emoji: {
    fontSize: 100,
  },
  iconContent: {
    padding: 5,
    paddingTop: 15,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: themeValues.colors.white.graySimple
  },
  button: {
    backgroundColor: themeValues.colors.success.successSimple,
    padding: 10,
    marginVertical: 6,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeValues.colors.white.whiteSimple,
  }
});