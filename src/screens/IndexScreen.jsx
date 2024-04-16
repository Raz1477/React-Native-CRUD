import React, { useContext } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import ListContext from '../context/ListContext';

const IndexScreen = () => {
	const { data, addListToDos } = useContext(ListContext);
	return (
		<View>
			<Text>To Do List:</Text>
			<TouchableOpacity onPress={addListToDos}>
				<Text>Add Task</Text>
			</TouchableOpacity>
			<FlatList
				data={data}
				keyExtractor={(listToDos) => listToDos.title}
				renderItem={({ item }) => {
					return <Text> - {item.title}</Text>;
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default IndexScreen;
