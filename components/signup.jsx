import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';
import { insertUser, getUser } from '../database/userController'; // Import the insertUser function

const signup = ({ navigation, OnSignup }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            console.log('Creating user with name: ', name, ' email: ', email, ' and password: ', password);
            await insertUser(name, email, password);
            console.log('User created successfully');

            // Check if user can be fetched
            try {
                console.log('Checking user with email: ', email, ' and password: ', password);
                const user = await getUser(email, password);

                if (user) {
                    console.log('User exists');
                    OnSignup(String(user.id));
                    navigation.navigate('FrontPage');
                } else {
                    console.log('User does not exist');
                }
            } catch (error) {
                console.log('Error checking user: ', error);
            }
        } catch (error) {
            console.log('Error creating user: ', error);
        }
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup</Text>
            <View style={styles.inputContainer}>
                <Text>Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    required
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Email:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    required
                />
            </View>
            <View style={styles.inputContainer}>
                <Text>Password:</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    required
                />
            </View>
            <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
                <Text style={globalStyles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    loginText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default signup;