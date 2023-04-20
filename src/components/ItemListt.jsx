import React, { useEffect, useState } from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'
import {getDoc, getFirestore, doc} from 'firebase/firestore'

const ItemListt = ({producto}) => {

//  useEffect(() => {
//   const db = getFirestore();
//   const oneCollection = doc(db, 'designs', `${category}`);
 
//   getDoc(oneCollection).then((snapshot) => {
//     if (snapshot.exists()) {
//       const docs = snapshot.data();
//       setProduct(docs);
//     }
//   });
// }, [])

  return (
    <>
    
    
    {console.log(producto)}
    {<div>
     <SimpleGrid columns={{ sm: 1, md: 3}} spacing='8' p='10' justifyContent='center'>
     
     {producto.map((prod) => {
          
                  return(
                  <Item
                  key={prod.id}
                  id={prod.id}
                  nombre={prod.nombre}
                  precio={prod.precio}
                  stock={prod.stock}
                  category={prod.category}
                  img={prod.img}
                 />)                       
                })}
  
      </SimpleGrid>
    </div>}  
    

    
    
    </>
  )
}

export default ItemListt

















// import React, { useEffect, useState } from 'react'
// import Item from './Item'
// import { SimpleGrid } from '@chakra-ui/react'
// import {getDoc, getFirestore, doc} from 'firebase/firestore'

// const ItemListt = ({productos}) => {

// //  useEffect(() => {
// //   const db = getFirestore();
// //   const oneCollection = doc(db, 'designs', `${category}`);
 
// //   getDoc(oneCollection).then((snapshot) => {
// //     if (snapshot.exists()) {
// //       const docs = snapshot.data();
// //       setProduct(docs);
// //     }
// //   });
// // }, [])

//   return (
//     <>
    
    
//        {console.log(productos)}
//     {<div>
//      <SimpleGrid
//      columns={{ sm: 1, md: 3}}
//      spacing='8'
//      p='10'
     
//      justifyContent='center'>
     
//      {productos.map((prod) => {
          
//         return(
        
//         <Item
//         key={prod.id}
//         id={prod.id}
//         nombre={prod.nombre}
//         precio={prod.precio}
//         stock={prod.stock}
//         category={prod.category}
//         img={prod.img}
//        />

       
//        )
       

//       })}
      

//       </SimpleGrid>
    
//     </div>}  
    

    
    
//     </>
//   )
// }

// export default React.memo(ItemListt)