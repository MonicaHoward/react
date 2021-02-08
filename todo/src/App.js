// import logo from './logo.svg';
import React, { useContext, useReducer } from 'react';
import './App.css';
import TodoList from './Pages/TodoList'
import TodoForm from './Components/TodoForm'
import TodosContext from './context'
import todosReducer from './reducer'

function App() {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
  

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  );
}

export default App;
