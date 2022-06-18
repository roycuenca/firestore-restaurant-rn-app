import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigation/Routes';
import { getAllProducts, deleteProduct } from '../../config/ProductApi';
import { Card } from '../../components/commons/card/Card';
import ButtonComponent from '../../components/commons/button/Button';
import { themeValues } from '../../themeValues';
import { collection } from 'firebase/firestore';
import { database } from '../../config/fb';


const HomeScreen = () => {

  const navigation = useNavigation();
  const [products, setProducts] = useState<any[]>([]);
  const redirectToAddProduct = () => navigation.navigate(ROUTES.addProduct);

  useEffect(() => {
    getAllProducts(setProducts)
  }, [products])

  const renderContent = () => {
    return <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => <Card
        key={item.id}
        id={item.id}
        emoji={item.emoji}
        name={item.name}
        price={item.price}
        isSold={item.isSold}
        onDeleteFn={deleteProduct}
      />}
    />
  }


  return (
    <SafeAreaView>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>All products</Text>
      </View>
      <View style={styles.contentContainer}>
        <ButtonComponent
          text='Add Product'
          handleOnPress={redirectToAddProduct}
          bg={themeValues.colors.primary.primaryWithOpacity}
        />
      </View>
      {renderContent()}
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginVertical: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: '5%',
  },
  listContainer: {
    width: '100%'
  }
});