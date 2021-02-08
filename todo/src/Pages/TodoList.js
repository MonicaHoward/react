import React, { useContext, useReducer } from 'react';
import TodosContext from '../context'
import todosReducer from '../reducer'

// import Todo from '../Components/Todo'

export default function TodoList(){
    const {state, dispatch} = useContext(TodosContext)


    return(
        <div>
            <ul>
            {state.todoItems.map(item => (
                <li 
                    key={item.id}
                >
                    <span
                        onDoubleClick={() => dispatch({type: "TOGGLE_ITEM", payload: item})}
                    >
                        {item.text}
                    </span>
                    <span
                        onClick={() => dispatch({type: "UPDATE_ITEM", payload: item})}
                    >
                        EDIT
                    </span>
                    <span
                        onClick={() => dispatch({type: "DELETE_ITEM", payload: item})}
                    >
                        DELETE
                    </span>
                </li>
            ))}
            </ul>
        </div>
    )
}