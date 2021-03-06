import React from 'react'
import PropTypes from 'prop-types'
import CustomersAction from './CustomersAction'

const CustomerData = ({id, name, dni, age, onBack, submitting, isDeleteAllow, onDelete}) => {
    return (
    <div>
        <div className="customer-data">
            <h2>Información del cliente</h2>
            <div><strong>Nombre</strong> <i>{name}</i></div>
            <div><strong>DNI</strong> <i>{dni}</i></div>
            <div><strong>Edad</strong> <i>{age}</i></div>
            <CustomersAction>
                <button onClick={onBack} disabled={submitting} >Volver</button>
                {isDeleteAllow && <button onClick={() => onDelete(id)}>Eliminar</button>}
            </CustomersAction>
        </div>
    </div>
    )
}

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

export default CustomerData
