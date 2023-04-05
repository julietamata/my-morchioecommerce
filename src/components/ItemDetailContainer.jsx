
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import data from '../../data.json'
import { useParams } from 'react-router-dom'
import {getDocs, getFirestore, collection} from "firebase/firestore"



const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const {id} =useParams();
  


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
  // const getDatos = () =>{
  //   return new Promise((resolve, reject) =>{
  //     if (getDatos === 0) {
  //       reject(new Error("no hay datos"));
  //     }resolve(data);
  //   });
  // }; 
  //   getDatos().then((productos) => setProductos(productos))
  //   },[] )

    const filtroId = productos.filter((prod) => prod.id == id);
 
  return (
    <div>    

      {id ? <ItemDetail productos={filtroId} /> : <ItemDetail productos={productos}/>}
   
    </div>
  )
}

export default ItemDetailContainer





