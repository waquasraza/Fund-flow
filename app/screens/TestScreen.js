import React from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	Linking,
	StyleSheet,
} from 'react-native';

const TestScreen = () => {
	const handlePress = (link) => {
		Linking.openURL(link); // Opens the provided link when clicked
	};

	return (
		<View style={styles.container}>
			<Text>
				By selecting "Join EzRemit" you agree to EZRemit's{' '}
				<TouchableOpacity
					onPress={() => handlePress('https://example.com/terms')}
				>
					<Text style={styles.linkText}>Terms of Service</Text>
				</TouchableOpacity>
				{', '}
				<TouchableOpacity
					onPress={() => handlePress('https://example.com/privacy')}
				>
					<Text style={styles.linkText}>Privacy Policy</Text>
				</TouchableOpacity>
				{', and to receive communications according to the '}
				<TouchableOpacity
					onPress={() =>
						handlePress('https://example.com/disclosure')
					}
				>
					<Text style={styles.linkText}>E-sign Disclosure</Text>
				</TouchableOpacity>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	linkText: {
		textDecorationLine: 'underline',
		color: 'blue',
	},
});

export default TestScreen;
