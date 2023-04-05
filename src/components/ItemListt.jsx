import React from 'react'
import Item from './Item'
import { Container, Flex, Card, CardBody, SimpleGrid } from '@chakra-ui/react'

const ItemListt = ({productos}) => {
  return (
    <>
    
    
       {console.log(productos)}
    {<div>
      {/* <Flex justifyContent='center' gap='6'> */}
     <SimpleGrid
     columns={{ sm: 1, md: 3}}
     spacing='8'
     p='10'
     
     justifyContent='center'>
     
     {productos.map((prod) => {
          
        return(
        
        <Item
        key={prod.id}
        id={prod.id}
        nombre={prod.nombre}
        precio={prod.precio}
        stock={prod.stock}
        category={prod.category}
        img={prod.img}
       />

       
       )
       

      })}
      

      </SimpleGrid>
      {/* </Flex> */}
    </div>}  
    

    
    
    </>
  )
}

export default React.memo(ItemListt)