import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles';
import { getUser } from '../database/userController'; // Import the getUser function

const Login = ({ navigation, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        try {
            console.log('Checking user with email: ', email, ' and password: ', password);
            const user = await getUser(email, password);

            if (user) {
                console.log('User exists');
                onLogin(String(user.id));
                navigation.navigate('FrontPage');
            } else {
                console.log('User does not exist');
            }
        } catch (error) {
            console.log('Error checking user: ', error);
        }
    };

    const handleSignup = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
                <Text style={globalStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.signupText}>Sign up</Text>
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
    signupText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default Login;