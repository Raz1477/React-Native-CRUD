import React, { useReducer } from 'react';

const ListContext = React.createContext();
const listReducer = (state, action) => {
  switch (action.type) {
    case 'edit_ListToDo':
      return state.map((listToDos) => {
        return listToDos.id === action.payload.id ? action.payload : listToDos;
      });

    case 'delete_listToDo':
      return state.filter((listToDos) => listToDos.id !== action.payload);

    case 'add_listToDo':
      return [
        ...state,
        {
          id: new Date().getTime(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

    default:
      return state;
  }
};

export const ListProvider = ({ children }) => {
  const [listToDos, dispatch] = useReducer(listReducer, []);
  const editListToDos = (id, title, content, callback) => {
    dispatch({
      type: 'edit_ListToDo',
      payload: { id, title, content },
    });
    callback();
  };

  const addListToDos = (title, content, callback) => {
    dispatch({
      type: 'add_listToDo',
      payload: { title: title, content: content },
    });
    callback();
  };

  const deleteListToDos = (id) => {
    dispatch({ type: 'delete_listToDo', payload: id });
  };

  return (
    <ListContext.Provider
      value={{ data: listToDos, addListToDos, deleteListToDos, editListToDos }}
    >
      {children}
    </ListContext.Provider>
  );
};
export default ListContext;