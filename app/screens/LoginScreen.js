import { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<View
				style={{
					alignSelf: 'flex-end',
					marginRight: 20,
					marginTop: 20,
				}}
			>
				<Entypo
					name="help-with-circle"
					size={32}
					color="#2B77E5"
					onPress={() => console.log('Help')}
				/>
			</View>
			<Text style={styles.title}>Welcome Back!</Text>
			<View style={styles.textInputFeildscontainer}>
				<TextInput placeholder="Email " style={styles.textIputBox} />
				<View style={styles.textInputPassword}>
					<TextInput
						style={{ fontSize: 18 }}
						placeholder="Password"
						secureTextEntry={!showPassword}
					/>
					<TouchableOpacity
						onPress={togglePasswordVisibility}
						style={styles.icon}
					>
						<Ionicons
							name={showPassword ? 'eye-off' : 'eye'}
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.signInButtonContainer}>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => {
						console.log('Login button clicked');
					}}
				>
					<Text style={styles.LoginText}>Sign In</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.newToOurPlatformContainer}>
				<Text style={styles.newToOurPlatformText}>
					New to FundFlow ?{' '}
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Register');
						}}
					>
						<Text style={styles.createAnAccount}>Sign Up</Text>
					</TouchableOpacity>
				</Text>
			</View>
		</>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	textInputFeildscontainer: {
		marginHorizontal: 40,
	},
	title: {
		textAlign: 'center',
		fontSize: 28,
		marginTop: 20,
		marginBottom: 40,
	},
	textIputBox: {
		padding: 14,
		borderWidth: 2,
		marginBottom: 20,
		borderRadius: 5,
		fontSize: 18,
	},
	textInputPassword: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderColor: 'black',
		borderWidth: 2,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 5,
		fontSize: 18,
	},

	tncContainer: {
		marginTop: 20,
	},

	tncText: {
		lineHeight: 18,
	},

	link: {
		textDecorationLine: 'underline',
		color: 'blue',
	},

	signInButtonContainer: {
		marginHorizontal: 40,
	},
	loginButton: {
		backgroundColor: '#2B77E5',
		width: '100%',
		marginTop: 20,
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
	LoginText: {
		fontSize: 20,
		color: '#fff',
	},
	newToOurPlatformContainer: {
		marginTop: 20,
		marginHorizontal: 40,
		alignItems: 'center',
	},
	newToOurPlatformText: {
		fontSize: 18,
	},
	createAnAccount: {
		fontSize: 18,
		color: 'blue',
	},
});
