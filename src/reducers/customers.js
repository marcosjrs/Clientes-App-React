import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constants';

// usamos handleActions para añadir casos de "reducers" (lo que normalmente sería cada caso del switch). Por ahora solo metemos uno, en plan dummy (sin modificar el state)
// cuando se hace un dispatch de tipo 'FETCH_CUSTOMERS' (que lo hace el createActions) 
//      entra en  [FETCH_CUSTOMERS]: (state, action) => [...action.payload]  directamente
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],  // el payload trae todos los clientes
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload], // el payload trae el nuevo cliente
    [UPDATE_CUSTOMER]: (state, action) => {
        const nuevoCliente = action.payload;
        const { id } = nuevoCliente;
        const customers = state;
        const initialValue = [];
        const newCustomers = customers.reduce((acc, customer) => {
            if (customer.id === id) {
                return [...acc, nuevoCliente];
            } else {
                return [...acc, customer];
            }
        }, initialValue);

        return newCustomers;
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);
//  [FETCH_CUSTOMERS]: (state, action) => state ..  sería como:  'FETCH_CUSTOMERS': (state, action) => state