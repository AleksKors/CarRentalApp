import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../styles';

const CarDisplay = ({ car }) => {
    const navigation = useNavigation();

    const handleRentClick = () => {
        navigation.navigate('CarView', { car });
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" }}
                style={{ width: 'auto', height: 200, borderRadius: 10, marginBottom: 20 }}
            />
            <Text style={styles.header}>
                {car.year} {car.make} {car.model}
            </Text>
            <Text style={styles.item}>
                <Text style={{ fontWeight: 'bold' }}>Price:</Text> ${car.pricePerDay} /day
            </Text>
            <TouchableOpacity style={globalStyles.button} onPress={handleRentClick}>
                <Text style={globalStyles.buttonText}>Rent</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        margin: 10,
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default CarDisplay;