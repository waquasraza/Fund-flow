import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={UserRegisterScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
