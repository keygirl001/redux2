import {combineReducers} from 'redux';
import toDoReducer from './ToDoReducer.js';
import filterReducer from './FilterReducer.js';
const rootReducer = combineReducers({
    toDoList: toDoReducer,
    filterText: filterReducer
});
export default rootReducer;