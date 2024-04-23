import React, { useContext, useEffect } from 'react';
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

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Feather
					name='plus'
					size={30}
					onPress={() => navigation.navigate('Create')}
				/>
			),
		});
	}, []);

	return (
		<View style={styles.container}>
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
		backgroundColor: '#E1EEF2',
	},
	title: {
		fontSize: 18,
	},
	icon: {
		fontSize: 26,
	},
	container: {
		alignItems: 'center',
	},
	task: {
		paddingVertical: 3,
		paddingHorizontal: 4,
	},
});

export default IndexScreen;
