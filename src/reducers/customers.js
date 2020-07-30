import {handleActions} from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

const initialState = {};

// usamos handleActions para añadir varios reducers. Por ahora solo metemos uno, en plan dummy (sin modificar el state)
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => state
},initialState);    
//  [FETCH_CUSTOMERS]: (state, action) => state ..  sería como:  'FETCH_CUSTOMERS': (state, action) => state