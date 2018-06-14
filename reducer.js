export const ADD_TODO = "ADD_TODO"

export default function reducer(state = { todos: [] }, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload.newTodo] };


        default:
            return state;
    }
}


export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: {
            newTodo: newTodo
        }
    }
};