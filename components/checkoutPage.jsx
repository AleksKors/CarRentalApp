import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { globalStyles } from '../styles';

const CheckoutPage = ( {route} ) => {
    const { car } = route.params;

  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [rememberCard, setRememberCard] = useState(false);
  const [useShippingAddress, setUseShippingAddress] = useState(true); // Default to using the shipping address

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>basket.</Text>
        <TouchableOpacity>
          <Text style={styles.closeIcon}>✖</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}> {car.make} {car.model}</Text>
        <Text style={styles.headerText}>${car.pricePerDay}</Text>
        {console.log(car)}
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>View ➔ Confirm ➔ Process ➔ Order</Text>
      </View>

      {/* Payment Information */}
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentTitle}>Payment</Text>
        <Text style={styles.paymentSubtext}>Transactions are secure and encrypted.</Text>

        {/* Name on Card */}
        <TextInput
          style={styles.input}
          placeholder="Name on Card"
          value={nameOnCard} 
          onChangeText={setNameOnCard}
        />

        {/* Card Number */}
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        {/* Expiry Date and Security Code */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Expiry Date"
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Security Code"
            secureTextEntry={true}
            keyboardType="numeric"
            value={securityCode}
            onChangeText={setSecurityCode}
          />
        </View>

        
      </View>

      {/* Billing Information */}
      <View style={styles.billingContainer}>
        <Text style={styles.billingTitle}>Billing Information</Text>
        <Text>Choose the billing address for payment:</Text>

        {/* Use Shipping Address Radio Button */}
        <TouchableOpacity style={styles.radioContainer} onPress={() => setUseShippingAddress(true)}>
          <View style={styles.radioCircle}>
            {useShippingAddress && <View style={styles.selectedRb} />}
          </View>
          <Text>Use shipping address</Text>
        </TouchableOpacity>

        {/* Enter Different Billing Address Radio Button */}
        <TouchableOpacity style={styles.radioContainer} onPress={() => setUseShippingAddress(false)}>
          <View style={styles.radioCircle}>
            {!useShippingAddress && <View style={styles.selectedRb} />}
          </View>
          <Text>Enter a different billing address</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  closeIcon: {
    fontSize: 24,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentContainer: {
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentSubtext: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  
  billingContainer: {
    marginBottom: 20,
  },
  billingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  
});

export default CheckoutPage;
