import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame'
import { getCustomerByDni } from '../selectors/customers'
import { fetchCustomers } from './../actions/fetchCustomers';
import { withRouter, Route } from 'react-router-dom'
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";

export class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    renderBody = () => {
        return (
            <Route path="/customers/:id/edit" render={
                ({match}) => match ?
                    <CustomerEdit {...this.props.customer} /> :
                    <CustomerData {...this.props.customer} />
            }>
            </Route>
        ); 
        //Con <xyz {...this.props.customer} />   destructuramos los datos del costumer y se lo pasamos como parametros. 
        //Sería como hacerage={this.props.customer.age}, y así con cada propiedad
        //Tambien se podría recoger el controlARenderizar según match y luego poner las props solo a ese:
        // const ControlARenderizar = match ?  CustomerEdit : CustomerData;
        // return (<ControlARenderizar {...this.props.customer} />)
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={
                        <div>
                            {this.props.customer && this.renderBody()}
                        </div>
                    }
                    footer=' '
                ></AppFrame>
            </div>
        )
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers
})(CustomerContainer));
