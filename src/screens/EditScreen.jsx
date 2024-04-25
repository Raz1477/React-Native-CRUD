import React, {useContext, useState} from 'react';
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

const EditScreen = ({ navigation, route }) => {
	const { id } = route.params;

	const { data, editListToDos } = useContext(ListContext);
	const listItem = data.find((listItem) => listItem.id === id);
	const [title, setTitle] = useState(listItem.title);
	const [content, setContent] = useState(listItem.content);

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
				title='Submit Changes'
				onPress={() => {
					editListToDos(id, title, content, () => {
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
		paddingTop: 5,
	},
});
export default EditScreen;
