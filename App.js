import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputText from './practice/Text/InputText';

export default function App() {
	return (
		<View style={styles.container}>
			<InputText />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#47476b',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
