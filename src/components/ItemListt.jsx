import React from 'react'
import Item from './Item'
import { Container } from '@chakra-ui/react'

const ItemListt = ({productos}) => {
  return (
    <>
       {console.log(productos)}
    {<Container>
      
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
    </Container>}  
      
    
    </>
  )
}

export default React.memo(ItemListt)