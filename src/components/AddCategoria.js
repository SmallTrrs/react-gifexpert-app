import React, { useState } from 'react'

import PropTypes from 'prop-types'

export const AddCategoria = ( { setCategorias } ) => {
  
    const [inputValue , setInputValue ] = useState('');
    
  
    const handleInputChange = ( e ) => {

        setInputValue( e.target.value );

    }

    const handleSubmit = ( e ) => {
      e.preventDefault();

      if ( inputValue.trim().length > 2 )
        setCategorias( ( categorias ) => [inputValue, ...categorias]);
        setInputValue('');

    }

    return (
        <form onSubmit={ handleSubmit }>

           <input 
            type="text"
            onChange= { handleInputChange }
            value = { inputValue }
           />
        </form>
    )
}

AddCategoria.propTypes = {

  setCategorias:PropTypes.func.isRequired,


}