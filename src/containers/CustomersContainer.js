import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomerList from '../components/CustomerList';
import CustomersAction from '../components/CustomersAction';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';



export class CustomersContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomers();
    }
    

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = (customers) => (
        <div>
            <CustomerList
                customers={customers}
                urlPath={'customers/'}>
            </CustomerList>
            
            <CustomersAction>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersAction>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                header={"Listado de clientes"}
                body={this.renderBody(this.props.customers)}
                footer="Footer"
                ></AppFrame>
            </div>
        )
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
    customers: [ ]
};

const mapDispatchToProps = {
    fetchCustomers
}

const mapStateToProps = state => ({
    //Pendiente de hacer algo como....
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));