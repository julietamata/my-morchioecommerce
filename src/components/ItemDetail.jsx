import React, { useEffect, useState, useContext } from 'react'
import data from '../../data.json'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Image, Divider, Button, Flex, Container } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { CartProvider } from '../context/CartContext';
import { useParams } from 'react-router-dom'
import Item from './Item';
import {getDoc, getFirestore, doc} from 'firebase/firestore'


const ItemDetail = ({productos}) => {
  const {id} =useParams();
  const [product, setProduct] = useState([]);

//  useEffect(() => {
//   const db = getFirestore();
//   const oneCollection = doc(db, 'designs', `${id}`);
 
//   getDoc(oneCollection).then((snapshot) => {
//     if (snapshot.exists()) {
//       const docs = snapshot.data();
//       setProduct(docs);
//     }
//   });
// }, [])

  const {agregarProductos} = useContext(CartProvider);
   

  const onAdd =(prod, quantity) => {
    console.log(`compraste ${quantity}`)
    agregarProductos(prod, quantity);
    
  }

  return (
    
    <>
    <Card>
    <CardBody>
    <Flex justifyContent='center' gap='4'>
         
    
      {productos.map((prod) => {
        return(

          <div key={prod.id}>
          <Card maxW='sm'>
          <CardBody>
            <Image
              src={prod.img}
              alt='Prenda'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{prod.nombre}</Heading> 
              <Text color='teal' fontSize='md'>
                ${prod.precio}
              </Text>
              <Text> Categoría: {prod.category}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
          <ItemCount 
          onAdd={onAdd}
          nombre = {prod.nombre}
          stock = {prod.stock}
          id= {prod.id}
          precio={prod.precio} 
          img = {prod.img}
          prod={prod}
          />
          </CardFooter>
         </Card>
        </div>
       )
      })}
    
    </Flex>
    </CardBody> 
    </Card>
    </>
  )
}

export default ItemDetail


