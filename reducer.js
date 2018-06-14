const ADD_TODO = "ADD_TODO"

const TOGGLE_TODO = "TOGGLE_TODO";

let idGenerator = 15;

export default function reducer(state = { todos: [] }, action) {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };

        case TOGGLE_TODO:
            var newState = { ...state };
            var newTodos = newState.todos.map(todo => todo.id == action.payload.id ? {...todo, completed:! todo.completed} : todo)            
            newState.todos = newTodos;
            return newState;

        default:
            return state;
    }
}

export function toggleTodo(todoId) {
    return {
        type: TOGGLE_TODO,
        payload: {
            id: todoId
        }
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