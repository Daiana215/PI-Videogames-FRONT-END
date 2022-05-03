import { combineReducers } from 'redux';
import app from './app';
import videogames from './videogames';

const reducer = combineReducers({app, videogames});

export default reducer;