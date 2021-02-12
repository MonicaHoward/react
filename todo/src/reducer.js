export default function reducer(state, action){

    switch(action.type){

        case "TOGGLE_ITEM":
            const toggledItem = state.todoItems.map(item => item.id === action.payload.id ?{...action.payload, complete: !action.payload.complete} : item)
            return {
                ...state, 
                todoItems: toggledItem
            }  

        case "ADD_ITEM":
            const newItem = {
                id: Math.floor(Math.random() * 100000000),
                text: action.payload,
                complete: false
            }
            const addedItems = [...state.todoItems, newItem]
            return{
                ...state,
                todoItems: addedItems
            }

        case "SET_CURRENT_ITEM":
            return{
                ...state,
                currentItem: action.payload
            }
            
        case "UPDATE_ITEM":
            const updatedItem = {...state.currentItem, text: action.payload}

            const updatedItemIndex = state.todoItems.findIndex(item => item.id === state.currentItem.id ) 
             
            const updatedItems = [
                ...state.todoItems.slice(0, updatedItemIndex),
                updatedItem,
                ...state.todoItems.slice( updatedItemIndex + 1)
            ]
            return{
                ...state,
                currentItem: {},
                todoItems: updatedItems
            }

        case "DELETE_ITEM":
            const filteredItems = state.todoItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                todoItems: filteredItems
            }  

        default: 
            return state;
    }
}