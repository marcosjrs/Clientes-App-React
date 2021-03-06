import React from 'react'
import { reduxForm, Field } from 'redux-form' //reduxForm es la funcion decoradora para este compo. Field es el que disparará las acciones..
import CustomersAction from './CustomersAction';
import { Prompt } from 'react-router-dom';

const validarRequerido = (valorInput) =>{
    return !valorInput ? "El campo es requerido" : null; // o abreviando: !valorInput && "Campo obligatorio"
}
const validarNumerico = (valorInput) =>{
    return isNaN(valorInput) && "El campo debe ser un número";
}
const validarFormularioCustomerEdit = campos =>{
    const errores ={}
    if(!campos.name){
        errores.name = "El campo Nombre es requerido";
    }
    if(!campos.dni){
        errores.dni = "El campo DNI es requerido";
    }
    if(!campos.age){
        errores.age = "El campo Edad es requerido";
    }
    return errores;
}

const toNumber = (sNumero) => sNumero && Number(sNumero);
const toUpper = (cadena) => cadena && cadena.toUpperCase();

const InputConSpanAviso = ({input,meta, type, label, name}) =>{
    //podemo poner atributos a mayores en el Field, que luego se recogerían como propiedades, por ejemplo "label" es uno de ellos
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={type}/>
            {meta.error && meta.touched && <div>{meta.error}</div>}            
        </div>
    );
}

/**
 * Pendiente de modificar, por ahora es para continuar con el desarrollo...
 */
const CustomerEdit = ({handleSubmit, submitting, onBack, pristine ,submitSucceeded}) => {
    return (
        <div className="customer-data">
            <h2>Edición de información del cliente</h2>
            {/* onSubmit es de react-form y handleSubmit es la funcion pasada, que se usará para "burbujear",... pero que es el correspondiente al atributo onSubmit pasado (ver en CustomerContainer.js )*/}
            <form onSubmit={handleSubmit}>
                {/*<Field name="name" component="input" validate={validarRequerido}  type="text"></Field>*/}
                <Field name="name" component={InputConSpanAviso} type="text" label="Nombre" parse={toUpper}></Field>
                <Field name="dni" component={InputConSpanAviso} type="text" label="DNI"></Field>
                {/*las validaciones primero comprobará las del field y luego, si no tiene errores, comprubeba las del formulario */}
                <Field name="age" component={InputConSpanAviso} validate={[validarNumerico, validarRequerido]} type="number" label="Edad" parse={toNumber}></Field>

                <CustomersAction>
                    <button type="submit" disabled={pristine || submitting} >Aceptar</button>
                    <button type="button" onClick={onBack} disabled={submitting} >Volver</button>
                </CustomersAction>
                
                <Prompt when={!pristine && !submitSucceeded} message="Se perderán los datos si continúa" ></Prompt>

            </form>
        </div>
    )
}

//form: 'CustomerEdit' es el nombre que le estamos dando al formulario (y debe ser unico en la aplicacion)
export default reduxForm({ form: 'CustomerEdit' , validate:validarFormularioCustomerEdit })(CustomerEdit)




