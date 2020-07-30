import { FETCH_CUSTOMERS } from "../constants";

export const fetchCustomers = (payload) => ({
    type: FETCH_CUSTOMERS,
    payload
})
