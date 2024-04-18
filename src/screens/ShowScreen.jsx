import React, { useContext } from 'react';
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
	const { id } = route.params;
	console.log(route.params);
	const { data, addListToDos, deleteListToDos } = useContext(ListContext);
	const toDoList = data.find((toDoList) => toDoList.id === id);
	return (
		<View>
			<Text>{toDoList.id}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ShowScreen;
