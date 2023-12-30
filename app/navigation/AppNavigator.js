import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import RecipientsScreen from '../screens/RecipientsScreen';
import MyEzRemitScreen from '../screens/MyEzRemitScreen';

const Tab = createBottomTabNavigator();

function AppNavigator() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name="home"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Recipient"
				component={RecipientsScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name="account"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="MyEzRemit"
				component={MyEzRemitScreen}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name="account-details"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default AppNavigator;
