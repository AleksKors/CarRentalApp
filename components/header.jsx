import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const Header = ({ onLogout }) => {
    const navigation = useNavigation();
    const routes = useNavigationState(state => state?.routes || []);
    const currentRoute = routes.length > 0 ? routes[routes.length - 1].name : '';

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleTitlePress = () => {
        navigation.navigate('FrontPage');
    };

    return (
        <View style={styles.header}>
            {currentRoute !== 'FrontPage' && (
                <TouchableOpacity onPress={handleBackPress} style={styles.back}>
                    <Svg width={25} height={25} viewBox="0 0 122.88 108.06">
                        <Path d="M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z" />
                    </Svg>
                </TouchableOpacity>
            )}
            <View style={styles.titleContainer}>
                <TouchableOpacity onPress={handleTitlePress}>
                    <Text style={styles.title}>Car Rental App</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onLogout} style={styles.logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        paddingTop: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        position: 'relative',
    },
    back: {
        position: 'absolute',
        left: 20,
        top: 20,
        padding: 20,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    logout: {
        position: 'absolute',
        right: 20,
        top: 20,
        padding: 20,
    },
});

export default Header;