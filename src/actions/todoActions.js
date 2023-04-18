export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      text,
      completed: false,
    },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    payload: { id, text },
  });
  

export const sampleTodos = [
  {
    id: ++nextTodoId,
    text: 'Buy groceries',
    completed: false,
  },
  {
    id: ++nextTodoId,
    text: 'Do laundry',
    completed: false,
  },
  {
    id: ++nextTodoId,
    text: 'Walk the dog',
    completed: false,
  },
];
