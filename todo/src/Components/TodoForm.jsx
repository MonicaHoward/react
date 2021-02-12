import React, { useContext, useEffect, useState } from 'react'
import TodosContext from '../context'

const TodoForm = () => {
    const [todoItem, setTodoItem ] = useState("")
    const { state: {currentItem={}}, dispatch } = useContext(TodosContext)

    useEffect(() => {
        if(currentItem.text){
            setTodoItem(currentItem.text)
        }
    }, [currentItem.id])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentItem.text){
            dispatch({type: "UPDATE_ITEM", payload: todoItem}) 
        } else {
            dispatch({type: "ADD_ITEM", payload: todoItem})
        }
        setTodoItem("")
    }

    return(
        <form
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                onChange={(e) => setTodoItem(e.target.value)} 
                value={todoItem}  
            />
        </form>
    )
}

export default TodoForm