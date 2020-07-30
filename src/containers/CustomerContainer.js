import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppFrame from '../components/AppFrame'

export class CustomerContainer extends Component {


    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={
                        <p>Datos del cliente</p>
                    }
                    footer='Footer'
                ></AppFrame>
            </div>
        )
    }
}

CustomerContainer.propTypes = {
    dni:PropTypes.string.isRequired,
}

export default connect(null, null)(CustomerContainer)
