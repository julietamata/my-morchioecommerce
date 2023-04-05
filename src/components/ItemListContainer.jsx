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
      
      {console.log(productos)}
    {category ? <ItemListt productos={filtroCategory} /> : <ItemListt productos={productos}/>}
        
    </div>
  )
}

export default ItemListContainer






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