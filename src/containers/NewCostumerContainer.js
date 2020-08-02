import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import { insertCustomer } from '../actions/insertCustomer';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

export class NewCostumerContainer extends Component {

    handleSubmit = valoresCampos => {
        return this.props.insertCustomer(valoresCampos)
            .then(r => {
                if (r.error) {
                    throw new SubmissionError(r.payload); // con esto metería como texto del error, el texto pasado desde el server y que se mete en el payload, del update_customer disparado internamente por redux-form
                }
            }); //el return es para que desactive el boton (gracias a submitting) mientras se hace peticion
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit
            initialValues={this.props.customer}
            onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleOnBack} />
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={"Alta de cliente"}
                    body={
                        this.renderBody()
                    }
                    footer=""
                ></AppFrame>
            </div>
        )
    }
}

NewCostumerContainer.propTypes = {
    insertCustomer: PropTypes.func,
}

export default withRouter(connect(null, { insertCustomer })(NewCostumerContainer))
