import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, sampleTodos } from '../actions/todoActions';

const initialState = {
  todos: sampleTodos,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.payload,
        ],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
