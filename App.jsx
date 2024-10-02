import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { createTables } from './database/migrations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/header';
import FrontPage from './components/frontpage';
import CarView from './components/carView';
import Login from './components/login';
import Signup from './components/signup';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    console.log('Creating tables');
    createTables();
    try {
      AsyncStorage.getItem('id').then((value) => {
        if (value) {
          console.log('User ID found');
          console.log('User ID: ', value);
          setIsLoggedIn(true);
          setUserID(value);
        }
      });
    } catch (e) {
      console.log('Error getting data: ', e);
    }
  }, []);

  const storeUser = async (value) => {
    try {
      await AsyncStorage.setItem('id', value);
    } catch (e) {
      console.log('Error storing data: ', e);
    }
  };

  const handleLogin = (userID) => {
    setIsLoggedIn(true);
    storeUser(userID);
    setUserID(userID);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserID(null);
    AsyncStorage.removeItem('id');
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {isLoggedIn && <Header onLogout={handleLogout} />}
        <Stack.Navigator initialRouteName={isLoggedIn ? "FrontPage" : "Login"}>
          {isLoggedIn ? (
            <>
              <Stack.Screen name="FrontPage" component={FrontPage} options={{ headerShown: false }} />
              <Stack.Screen name="CarView" component={CarView} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" options={{ headerShown: false }} >
                {(props) => <Login {...props} onLogin={handleLogin} />}
              </Stack.Screen>
              <Stack.Screen name="Signup" options={{ headerShown: false }} >
                {(props) => <Signup {...props} OnSignup={handleLogin} />}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});