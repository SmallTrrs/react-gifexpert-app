import React, { useState }  from 'react'
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( ) => {
    
    const [categorias, setCategorias] = useState( ['Dragon Ball'] );

    // const handleAdd = () => {
       
    //         // setCategorias( ['DeadPool', ...categorias ] );
    //         setCategorias(  cat => ['DeadPool',...cat] );

    // }
    
    
    return (
        <>
           <h2>GifExpertApp</h2>  

             <AddCategoria setCategorias = { setCategorias }/>

           <hr></hr> 

            <ol>{ 

              categorias.map( (categoria) => (

                   <GifGrid 
                    key = { categoria }
                    categoria= { categoria  } 
                    />

              ))
             }
            </ol>
        </>
    )
}



