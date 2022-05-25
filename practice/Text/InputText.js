import { ScrollView, View, TextInput, Image } from 'react-native';

const InputText = () => {
	return (
		<ScrollView>
			<View>
				<Image
					style={{ width: 400, height: 300 }}
					source={{ uri: 'https://reactjs.org/logo-og.png' }}
				/>
			</View>
			<TextInput
				style={{
					marginTop: 20,
					marginLeft: 20,
					marginRight: 30,
					paddingLeft: 10,
					height: 40,
					backgroundColor: '#f5f5f5',
					borderColor: '#f5f5f5',
					color: '#000099',
					fontSize: 16,
					borderWidth: 1,
				}}
				defaultValue='First component of React Native'
			></TextInput>
		</ScrollView>
	);
};

export default InputText;
