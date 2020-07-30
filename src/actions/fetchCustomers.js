import { FETCH_CUSTOMERS } from "../constants";
import {createAction} from "redux-actions";


export const fetchCustomers = createAction(FETCH_CUSTOMERS)
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
