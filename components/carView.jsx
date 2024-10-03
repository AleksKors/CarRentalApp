import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const CarView = ({ route }) => {
    const { car } = route.params;
    const navigation = useNavigation();


    const handleRentNow = () => {
        Alert.alert("Rent Now", `You have chosen to rent the ${car.make} ${car.model} for $${car.pricePerDay} per day.`);
        navigation.navigate('CheckoutPage', { car });
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" }}
                style={{ width: 'auto', height: 200, borderRadius: 10, marginBottom: 20 }}
            />
            <Text style={styles.title}>{car.make} {car.model}</Text>
            <Text>Year: {car.year}</Text>
            <Text>Price: ${car.pricePerDay}</Text>
            <Text>Color: {car.color}</Text>
            <Text>Available: {car.isAvailable === true ? "true" : "false" }</Text>

            {/* Rent Now Button */}
            <TouchableOpacity style={styles.rentButton} onPress={handleRentNow}>
                <Text style={styles.rentButtonText}>Rent Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    rentButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    rentButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CarView;
