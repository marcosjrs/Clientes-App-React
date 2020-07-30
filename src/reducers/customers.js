import {handleActions} from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

// usamos handleActions para añadir casos de "reducers" (lo que normalmente sería cada caso del switch). Por ahora solo metemos uno, en plan dummy (sin modificar el state)
// cuando se hace un dispatch de tipo 'FETCH_CUSTOMERS' (que lo hace el createActions) 
//      entra en  [FETCH_CUSTOMERS]: (state, action) => [...action.payload]  directamente
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload]
},[]);    
//  [FETCH_CUSTOMERS]: (state, action) => state ..  sería como:  'FETCH_CUSTOMERS': (state, action) => state