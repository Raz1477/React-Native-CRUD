import React, { useReducer } from 'react';

const ListContext = React.createContext();

const listReducer = (state, action) => {
	switch (action.type) {
		case 'delete_listToDo':
			return state.filter((listToDos) => listToDos.id !== action.payload);
		case 'add_listToDo':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 999999999999999),
					title: `To Dos #${state.length + 1}`,
				},
			];

		default:
			return state;
	}
};

export const ListProvider = ({ children }) => {
	const [listToDos, dispatch] = useReducer(listReducer, []);

	const addListToDos = () => {
		dispatch({ type: 'add_listToDo' });
	};

	const deleteListToDos = (id) => {
		dispatch({ type: 'delete_listToDo', payload: id });
	};

	return (
		<ListContext.Provider
			value={{ data: listToDos, addListToDos, deleteListToDos }}
		>
			{children}
		</ListContext.Provider>
	);
};

export default ListContext;
