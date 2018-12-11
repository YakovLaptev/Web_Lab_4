import { combineReducers } from 'redux'
import todosReducer from './TodosReducer'

const todoApp = combineReducers({
   todos: todosReducer
});

export default todoApp