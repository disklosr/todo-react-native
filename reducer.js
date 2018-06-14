const ADD_TODO = "ADD_TODO"

let idGenerator = 2;

export default function reducer(state = { todos: [] }, action) {
    console.log(JSON.stringify(action));
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };


        default:
            return state;
    }
}


export function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        payload: {
            content: newTodo,
            id: idGenerator++,
            completed: false
        }
    }
};