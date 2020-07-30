import { FETCH_CUSTOMERS } from "../constants";
import {createAction} from "redux-actions";

const customers= [
    {"dni":"12345678X", "name":"Pablo Palacios", "age":"41"},
    {"dni":"22345678X", "name":"Jaime Rosales", "age":"35"},
];

//simulamos que, al llamar a este actioncreator, sin parametros, devuelve el array customers....
export const fetchCustomers = createAction(FETCH_CUSTOMERS, ()=>customers); // Crea accion y hace dispatch...
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
