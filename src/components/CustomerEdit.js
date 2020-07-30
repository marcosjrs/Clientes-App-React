import React from 'react'
import PropTypes from 'prop-types'

/**
 * Pendiente de modificar, por ahora es para continuar con el desarrollo...
 */
const CustomerEdit = ({name, dni, age}) => {
    return (
    <div>
        <div className="customer-data">
            <h2>Edición de información del cliente</h2>
            <div><strong>Nombre</strong><i>{name}</i></div>
            <div><strong>DNI</strong><i>{dni}</i></div>
            <div><strong>Edad</strong><i>{age}</i></div>
        </div>
    </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired
}

export default CustomerEdit
