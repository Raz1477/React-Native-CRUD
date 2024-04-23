import React, { useContext, useState} from 'react';
import ListContext from '../context/ListContext';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
    TextInput,
} from 'react-native';
const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addListToDos } = useContext(ListContext);

	return (
		<View>
			<Text style={styles.label}>Enter List Title</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter List Description</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Button
				title='Add List item'
				onPress={() => {
					addListToDos(title, content, () => {
						navigation.navigate('List');
					});
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10,
		padding: 5,
		margin: 5,
        borderRadius: 10
	},
	label: {
		fontSize: 20,
        textAlign: 'center',
        fontWeight: '500',
        topPadding: 5,
	},
});

export default CreateScreen;
