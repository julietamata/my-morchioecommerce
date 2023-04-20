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
      // queryFilter = itemsCollection, where (category == prod.category);

    }, []);

    const filtroCategory = productos.filter(prod => prod.category === category);


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


   
  // 
   return (
  
    <div>
      
      {console.log(productos)}
    {/* {category ? <ItemListt productos={filtroCategory} /> : <ItemListt productos={productos}/>} */}
        <ItemListt productos={productos}/>
    </div>
  )
}

export default ItemListContainer







 
    
    //   useEffect(() => {
    //   const querydb = getFirestore();
    //   const queryCollection = collection(db, "designs");
    //   getDocs(queryCollection)
    //   .then((res => res.docs.map(product => {{id: product.id, ...product.data()}}) ) => { });
    
    // }, []);

    //  queryFilter = query(queryCollection, where ('category', '==', 'category'))










//     import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import data from '../../data.json'
// import ItemListt from './ItemListt'
// import {getDocs, getFirestore, collection} from "firebase/firestore"



// const ItemListContainer = () => {
//     const [productos, setProductos] = useState([]);
//     const {category} = useParams();



//     useEffect(() => {
//       const db = getFirestore();
//       const itemsCollection = collection(db, "designs");
//       getDocs(itemsCollection)
//       .then((snapshot) =>{
//         const productos= snapshot.docs.map((doc) => ({
//           ...doc.data(), id: doc.id, }))
//         console.log(productos);
//         setProductos(productos)
//       });
//       // queryFilter = itemsCollection, where (category == prod.category);

//     }, []);

    

//   //   useEffect(() => {
//   // const getDatos = () =>{
//   //   return new Promise((resolve, reject) =>{
//   //     if (getDatos === 0) {
//   //       reject(new Error("no hay datos"));
//   //     }resolve(data);
//   //     // console.log(data)
//   //   });
//   // };  
//   // getDatos().then((productos) => setProductos(productos))
//   // },[] )


//    const filtroCategory = productos.filter((prod) => prod.category === category);
   
//   // 
//    return (
  
//     <div>
      
//       {console.log(productos)}
//     {category ? <ItemListt productos={filtroCategory} /> : <ItemListt productos={productos}/>}
        
//     </div>
//   )
// }

// export default ItemListContainer












// const ItemListContainer = () => {
//   const [producto, setProducto] = useState([]);
//   const {categoria} = useParams();

//   useEffect(() => {
//     const db = getFirestore();
//     const queryCollection = collection(db, 'designs');
//     if(categoria){
//       const queryFilter = query(queryCollection, where('category', '==', categoria))
//       // const filtroCategory = data.filter((prod) => prod.categoria === 'category');
//     getDocs(queryFilter)
//     .then(res => setProducto(res.docs.map(product => ({id: product.id, ...product.data() }))))
//   } else {
//     getDocs(queryCollection)
//     .then(res => setProducto(res.docs.map(product => ({id: product.id, ...product.data() }))))
//   }      
// }, []);

// // const filtroCategory = data.filter((prod) => prod.categoria === 'category');
  
//  return (

//   <div>
    
//     {console.log(producto)}
//   {/* {categoria ? <ItemListt data={filtroCategory} /> : <ItemListt data={data}/>} */}
//       <ItemListt producto={producto}/>
//   </div>
// )
// }

// export default ItemListContainer
