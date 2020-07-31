export const getCustomers = state => state.customers;
export const getCustomerByDni = (state,props) => state.customers.find(c => c.dni===props.dni);
