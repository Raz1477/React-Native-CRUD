import React, { useContext, useEffect } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import ListContext from '../context/ListContext';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from 'react-native';

const ShowScreen = ({ navigation, route }) => {
const { id } = route.params

	const { data, addListToDos, deleteListToDos } = useContext(ListContext);
	const toDoList = data.find((toDoList) => toDoList.id === id);
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<EvilIcons
					name='pencil'
					size={30}
					onPress={() => navigation.navigate('Edit', { id: toDoList.id })}
				/>
			),
		});
	}, []);

	return (
		<View>
			<Text style={styles.titleText}>Title:</Text>
			<Text style={styles.itemText}>{toDoList.title}</Text>
			<Text style={styles.titleText}>Description:</Text>
			<Text style={styles.itemText}>{toDoList.content}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titleText: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center'
	},
	itemText: {
		fontSize: 18,
		textAlign: 'center'
	}
});

export default ShowScreen;
