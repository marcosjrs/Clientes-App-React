import { FETCH_CUSTOMERS } from "../constants";
import {createAction} from "redux-actions";
import { apiGet } from './../api';
import { urlCustomers } from "../api/urls";


//simulamos que, al llamar a este actioncreator, sin parametros, devuelve el array customers....
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers)); // Crea accion y hace dispatch...
/* 

Antes:
export const fetchCustomers = () => ({
    type: FETCH_CUSTOMERS
}))

Y luego, en mapDisptachToPropse en lugar de hacer: 
const mapDispatchToProps = (dispatch) => ({
    fetchCustomers: () => dispatch(fetchCustomers())
})

Quedaría directamente como : 
const mapDispatchToProps = {
    fetchCustomers
}

*/
