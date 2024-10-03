import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'BMW x5', price: '$99.99', image: 'image-url', insurance: false },
    { id: 2, name: 'Porsche 911', price: 'Insur', image: 'image-url', insurance: true },
    { id: 3, name: 'Tesla Model S', price: '$1', image: 'image-url', insurance: false },
  ];

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Your selection</Text>
      </View>

      {/* Cart Items */}
      <ScrollView style={styles.cartList}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.carImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.carName}>{item.name}</Text>
              <Text>{item.insurance ? 'Insurance included' : 'No Insurance'}</Text>
              <Text style={styles.carPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.trashIcon}>
              <Text>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Subtotal */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal: $294.97</Text>
        <Text style={styles.subtotalText}>Insurance: $15.00/day</Text>
      </View>

      {/* Rent Now Button */}
      <TouchableOpacity style={styles.rentButton}>
        <Text style={styles.rentButtonText}>Rent now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backArrow: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  cartList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  carImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  carName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  carPrice: {
    fontWeight: 'bold',
    color: '#000',
  },
  trashIcon: {
    padding: 10,
  },
  subtotalContainer: {
    padding: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rentButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  rentButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CartPage;
