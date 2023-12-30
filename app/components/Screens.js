import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

const Screens = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

export default Screens;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: Constants.statusBarHeight,
	},
});
