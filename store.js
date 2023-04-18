import { createStore } from 'redux';
import todoReducer from './src/reducers/todoReducer';

const store = createStore(todoReducer);

export default store;