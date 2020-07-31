import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomersAction from '../components/CustomersAction'
import { withRouter } from 'react-router-dom'

export class HomeContainer extends Component {
    static propTypes = {

    }
    handleClick = () => {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header="Home"
                    body={
                        <div>
                            <CustomersAction>
                                <button onClick={this.handleClick}>Listado de clientes</button>
                            </CustomersAction>
                        </div>
                    }
                    footer=" "
                ></AppFrame>
            </div>
        )
    }
}

//Para que tenga inyectado en props, history, entre otras...
export default withRouter(HomeContainer)
