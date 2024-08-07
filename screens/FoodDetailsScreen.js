import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import CartContext from '../state/store/CartStore';

const FoodDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { cart, dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      Alert.alert('Item already in cart', 'Please check your cart.', [
        { text: 'OK', onPress: () => navigation.navigate('Cart') },
      ]);
      return;
    }

    dispatch({ type: 'ADD_TO_CART', payload: item });
    console.log(`${item.name} added to cart.`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  price: {
    fontSize: 22,
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FoodDetailsScreen;
