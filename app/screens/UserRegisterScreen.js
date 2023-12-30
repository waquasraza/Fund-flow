import { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';

const UserRegisterScreen = ({ navigation }) => {
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
			<Text style={styles.title}>Create your profile</Text>
			<View style={styles.textInputFeildscontainer}>
				<TextInput
					style={styles.textIputBox}
					placeholder="First Name"
				/>
				<TextInput placeholder="Last Name" style={styles.textIputBox} />
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
				<View style={styles.tncContainer}>
					<Text style={styles.tncText}>
						By selecting "Join FundFlow" you agree to FundFlow's{' '}
						<TouchableOpacity
							onPress={() => {
								console.log('Terms of Service Screen Clicked');
							}}
						>
							<Text style={styles.link}>Terms of Service</Text>
						</TouchableOpacity>
						{', '}
						<TouchableOpacity
							onPress={() => {
								console.log('Privacy Policy Screen Clicked');
							}}
						>
							<Text style={styles.link}>Privacy Policy</Text>
						</TouchableOpacity>
						{' and '}
						<TouchableOpacity
							onPress={() => {
								console.log('E-siqn Disclosure Screen Clicked');
							}}
						>
							<Text style={styles.link}>E-siqn Disclosure</Text>
						</TouchableOpacity>
					</Text>
				</View>
			</View>
			<View style={styles.signUpButtonContainer}>
				<TouchableOpacity
					style={styles.signupButton}
					onPress={() => {
						console.log('signup button clicked');
					}}
				>
					<Text style={styles.signupText}>Join FundFlow</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.alreadyHaveAnAccountContainer}>
				<Text style={styles.alreadyHaveAnAccountText}>
					Already have an profile ?{' '}
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('Login');
						}}
					>
						<Text style={styles.alreadyHaveAnAccountLink}>
							Sign In
						</Text>
					</TouchableOpacity>
				</Text>
			</View>
		</>
	);
};

export default UserRegisterScreen;

const styles = StyleSheet.create({
	textInputFeildscontainer: {
		marginHorizontal: 40,
	},
	title: {
		textAlign: 'center',
		fontSize: 28,
		// marginTop: 20,
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

	signUpButtonContainer: {
		marginHorizontal: 40,
	},
	signupButton: {
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
	signupText: {
		fontSize: 20,
		color: '#fff',
	},
	alreadyHaveAnAccountContainer: {
		marginTop: 20,
		marginHorizontal: 40,
		alignItems: 'center',
	},
	alreadyHaveAnAccountText: {
		fontSize: 18,
	},
	alreadyHaveAnAccountLink: {
		fontSize: 18,
		color: 'blue',
	},
});
