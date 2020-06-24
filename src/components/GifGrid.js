// import React , { useState,  useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ categoria }) => {

    //  const [images, setImages] = useState([]);

      // se renombra data por images en la desestructuracion ( data: images )
   const { data: images , loading }=  useFetchGifs( categoria );


    return (

        <>
        <h3>{categoria}</h3>       

          { loading && <p>Cargando ... </p>  }  

        <div className="card-grid">
            

            {  images.map( (img) => (

              <GifGridItem 
              key={ img.id }
                {... img } 
              />
            
            ))

            }
  

        </div>
      </>  
    )
}
