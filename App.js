import { NavigationContainer } from '@react-navigation/native';
import Screens from './app/components/Screens';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';

export default function App() {
	return (
		<NavigationContainer theme={NavigationTheme}>
			<Screens>
				<AuthNavigator />
				{/* <AppNavigator /> */}
			</Screens>
		</NavigationContainer>
	);
}
