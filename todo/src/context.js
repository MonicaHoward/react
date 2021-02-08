import React from 'react'

const TodosContext = React.createContext({
    todoItems: [
        {
            id: 1, 
            text: "write code", 
            complete: true
        },
        {
            id: 2, 
            text: "test code", 
            complete: false
        },
        {
            id: 3, 
            text: "deploy code", 
            complete: false
        }

    ]
})

export default TodosContext;