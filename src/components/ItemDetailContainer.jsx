
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import data from '../../data.json'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

  const [productos, setProductos] = useState([]);

  const getDatos = () =>{
    return new Promise((resolve, reject) =>{
      if (getDatos === 0) {
        reject(new Error(" hay datos"));
      }resolve(data);
    });
  };
  
  useEffect(() => {
    getDatos().then((productos) => setProductos(productos))
    },[] )

  return (
    <div>
      ItemDetailContainer
      
      {/* {id ? <ItemDetail datos={idFilter} /> : <ItemDetail datos={datos}/>} */}
    <ItemDetail productos={productos}/>;
    {console.log(productos)}
    </div>
  )
}

export default ItemDetailContainer


