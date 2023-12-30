import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const WelcomeScreen = ({ navigation }) => {
	return (
		<>
			<View style={styles.container}>
				<View
					style={{
						alignSelf: 'flex-end',
						marginRight: 20,
						marginTop: 10,
					}}
				>
					<Entypo
						name="help-with-circle"
						size={32}
						color="#2B77E5"
						onPress={() => console.log('Help')}
					/>
				</View>
				<View style={styles.brandContainer}>
					<Text style={styles.brandName}>FundFlow</Text>
					<Text style={styles.brandSlogan}>Money Transfer</Text>
				</View>
			</View>
			<View style={styles.welcomeImageContainer}>
				<Image
					style={styles.welcomeImage}
					source={require('../assets/welcomeScreenImage.jpg')}
				/>
			</View>
			<View style={styles.introContainer}>
				<Text style={styles.introTitle}>Secure Transfers</Text>
				<Text style={styles.introDesc}>
					With FundFlow you can securely and reliably send money to
					family and friends in Ethiopia
				</Text>
			</View>

			<View style={styles.welcomeScreenButtonContainer}>
				<TouchableOpacity
					color={'red'}
					style={styles.signupButton}
					onPress={() => {
						navigation.removeListener;
						navigation.navigate('Register');
					}}
				>
					<Text style={styles.signupText}>Create a new profile</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => {
						navigation.removeListener;
						navigation.navigate('Login');
					}}
				>
					<Text style={styles.loginText}>
						I already have a profile
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		// marginTop: '2%',
		alignItems: 'center',
	},
	brandContainer: {
		// backgroundColor: 'red',
		marginTop: 10,
	},

	brandName: {
		fontSize: 48,
		color: '#D30219',
	},
	brandSlogan: {
		color: '#F3A76B',
		fontSize: 16,
		textAlign: 'right',
	},
	welcomeImageContainer: {
		alignItems: 'center',
		marginTop: 20,
	},
	welcomeImage: {
		width: 340,
		height: 200,
		borderRadius: 10,
	},

	introContainer: {
		marginTop: 20,
		marginHorizontal: 'auto',
		paddingHorizontal: 40,
	},

	introTitle: {
		fontSize: 42,
	},
	introDesc: {
		fontSize: 18,
		marginTop: 10,
		paddingRight: 30,
	},

	welcomeScreenButtonContainer: {
		marginHorizontal: 20,
	},
	signupButton: {
		backgroundColor: '#2B77E5',
		width: '100%',
		marginTop: 30,
		marginBottom: 12,
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',

		borderWidth: 2,
		shadowColor: '#333',
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 1,
		shadowRadius: 1,
		elevation: 5,
	},

	signupText: {
		fontSize: 20,
		color: '#fff',
	},
	loginText: {
		fontSize: 20,
		// color: '#fff',
	},

	loginButton: {
		backgroundColor: '#EEEEEE',
		width: '100%',
		padding: 12,
		alignItems: 'center',
		justifyContent: 'center',

		borderWidth: 2,
		shadowColor: '#333',
		shadowOffset: {
			width: 3,
			height: 3,
		},
		shadowOpacity: 1,
		shadowRadius: 1,
		elevation: 5,
	},
});
