import React, { useState } from 'react';

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {
	const [listToDos, setListToDos] = useState([]);
	const addListToDos = () => {
		setListToDos([...listToDos, { title: `To Dos #${listToDos.length + 1}` }]);
	};

	return (
		<ListContext.Provider
			value={{ data: listToDos, addListToDos: addListToDos }}
		>
			{children}
		</ListContext.Provider>
	);
};

export default ListContext;
