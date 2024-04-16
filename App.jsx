import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { ListProvider } from './src/context/ListContext';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='List' component={IndexScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default () => {
	return (
		<ListProvider>
			<App />
		</ListProvider>
	);
};
