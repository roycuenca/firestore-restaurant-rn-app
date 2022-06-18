import { database } from './fb';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

// @get all  Products
export const getAllProducts = async (callback: any) => {
  const collectionRef = collection(database, 'products');
  const data = await getDocs(collectionRef);
  callback(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

// @post Product
export const postProduct = async (newItem: TProduct) => {
  await addDoc(collection(database, 'products'), newItem);
};

// @delete Product
export const deleteProduct = async (itemId: string) => {
  console.log('@@@@@Item ID from delete fn: ', itemId);
  deleteDoc(doc(database, 'products', itemId));
};
