import { Flex, Box, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import ItemListt from './ItemListt'


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams();

  const getDatos = () =>{
    return new Promise((resolve, reject) =>{
      if (getDatos === 0) {
        reject(new Error(" hay datos"));
      }resolve(data);
      // console.log(data)
    });
  };

    // useEffect(() => {
    //    async function fetchingData() {
    //     try{
    //       const datosFetched = await getDatos();
    //       setProductos(productos);
    //           console.log(datosFetched);
    //       }catch(err)
    //     {console.log(err);} 
    // } fetchingData();},[]);

  useEffect(() => {
  getDatos().then((productos) => setProductos(productos))
  },[] )

  console.log(productos);

   const filtroCategory = productos.filter((prod) => prod.category === category);
  
   return (
    <div>
         <Flex minWidth='max-content' alignItems='center' gap='2'>

    {category ? <ItemListt productos={filtroCategory} /> : <ItemListt productos={productos}/>}
        </Flex>
    </div>
  )
}

export default ItemListContainer
