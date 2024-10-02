import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CarView = ({ route }) => {
    const { car } = route.params;

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
});

export default CarView;