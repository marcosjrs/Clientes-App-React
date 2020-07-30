import {createStore, compose} from 'redux';
//Por ahora hacemos unos reducers dummy.. 
const reducers = (state, accion) =>{
    return state;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {}, composeEnhancers())