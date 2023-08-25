
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './Components/Redux/ProductWrapper';
import UserList from './Components/Redux/UserList';

const Stack = createNativeStackNavigator();
const App = () => {

    return (
        < NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={ProductWrapper} />
                <Stack.Screen name='User' component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;