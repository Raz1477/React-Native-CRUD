import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons';

import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Touchable,
} from 'react-native';

import ListContext from '../context/ListContext';

const IndexScreen = ({ navigation }) => {
	const { data, addListToDos, deleteListToDos } = useContext(ListContext);

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<Text style={styles.listTitle}>To Do List</Text>
				<TouchableOpacity onPress={addListToDos} style={styles.button}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={data}
				keyExtractor={(listToDos) => listToDos.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							style={styles.task}
							onPress={() => navigation.navigate('Show', { id: item.id })}
						>
							<View style={styles.row}>
								<Text style={styles.title}>
									{item.title}- {item.id}
								</Text>
								<TouchableOpacity onPress={() => deleteListToDos(item.id)}>
									<Feather style={styles.icon} name='trash' />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,

		width: '100%',
		borderRadius: 10,
		backgroundColor: 'lightgray'
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 26,
	},
	button: {
		backgroundColor: 'lightblue',
		alignItems: 'center',
		fontSize: 25,
		borderRadius: 10,
		width: 50,
		height: 50,
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 25,
	},
	listTitle: {
		fontSize: 40,
		textAlign: 'center',
		fontWeight: '500',
		paddingRight: 20,
	},
	container: {
		alignItems: 'center',
	},
	top: {
		flexDirection: 'row',
		paddingTop: 5,
		paddingBottom: 5,
	},
	task: {
		paddingVertical: 3,
		paddingHorizontal: 4,
	},
});

export default IndexScreen;
