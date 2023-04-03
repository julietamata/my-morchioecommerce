import { Flex, Box, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import ItemListt from './ItemListt'
import {getDocs, getFirestore, collection} from "firebase/firestore"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams();



    useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "designs");
      getDocs(itemsCollection)
      .then((snapshot) =>{
        const productos= snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id, }))
        console.log(productos);
        setProductos(productos)
      });
    
    }, []);

    // useEffect(() => {
    //   const db = getFirestore();
    //   const itemsCollection = collection(db, "designs");
    //   getDocs(itemsCollection)
    //   .then((snapshot) =>{
    //     const productos= snapshot.docs.map((doc) =>
    //      doc.data());
    //     console.log(productos);
    //     setProductos(docs)
    //   });
    
    // }, []);

  //   useEffect(() => {
  // const getDatos = () =>{
  //   return new Promise((resolve, reject) =>{
  //     if (getDatos === 0) {
  //       reject(new Error("no hay datos"));
  //     }resolve(data);
  //     // console.log(data)
  //   });
  // };  
  // getDatos().then((productos) => setProductos(productos))
  // },[] )


   const filtroCategory = productos.filter((prod) => prod.category === category);
  
   return (
  
    <div>
      
         <Flex minWidth='max-content' alignItems='center' gap='2'>
      {console.log(productos)}
    {category ? <ItemListt productos={filtroCategory} /> : <ItemListt productos={productos}/>}
        </Flex>
    </div>
  )
}

export default ItemListContainer






    // useEffect(() => {
    //   const db = getFirestore();
    //   const itemsCollection = collection(db, "designs");
    //   getDocs(itemsCollection)
    //   .then(res => setProductos(res.docs.map(product => ({id: product.id, ...product.productos() }))));  
    // }, [category]);
