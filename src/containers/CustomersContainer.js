import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomerList from '../components/CustomerList';
import CustomersAction from '../components/CustomersAction';
import { withRouter } from 'react-router-dom';



export class CustomersContainer extends Component {
    customers = [
        {"dni":"12345678X", "name":"Pablo Palacios", "age":"41"},
        {"dni":"22345678X", "name":"Jaime Rosales", "age":"35"},
    ];

    static propTypes = {

    }

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = (customers) => (
        <div>
            <CustomerList
                customers={this.customers}
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
                body={this.renderBody()}
                footer="Footer"
                ></AppFrame>
            </div>
        )
    }
}

export default withRouter( CustomersContainer)