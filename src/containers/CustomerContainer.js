import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame'
import { getCustomerByDni } from '../selectors/customers'
import { fetchCustomers } from './../actions/fetchCustomers';
import { updateCustomer } from './../actions/updateCustomer';
import { deleteCustomer } from './../actions/deleteCustomer';
import { withRouter, Route } from 'react-router-dom'
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";
import { SubmissionError } from 'redux-form'

export class CustomerContainer extends Component {

    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    handleSubmit = valoresCampos => {
        const {id} = valoresCampos;
        return this.props.updateCustomer(id, valoresCampos)
            .then( r => {
                if(r.error){
                    throw new SubmissionError(r.payload); // con esto metería como texto del error, el texto pasado desde el server y que se mete en el payload, del update_customer disparado internamente por redux-form
                }
            } ); //el return es para que desactive el boton (gracias a submitting) mientras se hace peticion
    }
    
    handleOnBack = () =>{
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () =>{
        this.props.history.goBack();
    }

    handleOnDelete = id => {
        this.props.deleteCustomer(id).then(v => {
            this.props.history.goBack();
        });
    }

    renderBody = () => {

        return (
            <Route path="/customers/:id/edit" children={
                ( { match: isEdit } ) => (
                    <Route path="/customers/:dni/del" children={
                        ( { match: isDelete } ) => (
                            isEdit ?
                            <CustomerEdit initialValues={this.props.customer} onSubmit={this.handleSubmit} onSubmitSuccess={this.handleOnSubmitSuccess} onBack={this.handleOnBack} /> :
                            <CustomerData {...this.props.customer} onBack={this.handleOnBack} isDeleteAllow={isDelete} onDelete={this.handleOnDelete}/> 
                        )
                } /> )
            }/>
        ); 
        //Con initialValues, el redux-form coge directamente los valores de las propiedades que coincidan con el name de los "Field"
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
    fetchCustomers:PropTypes.func.isRequired,
    updateCustomer:PropTypes.func.isRequired,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
})(CustomerContainer));
