import React, {useContext} from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Flex, Stack, Text, CardFooter, Box  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CartProvider } from '../context/CartContext';
import Item from './Item';


const ItemCount = ({stock, nombre, precio, img, id, onAdd, prod }) => {
  const {agregarProductos, saludo} = useContext(CartProvider);
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    cantidad >= stock ? alert("Lo sentimos, no hay suficientes productos disponibles") : setCantidad(cantidad + 1)};
  const restar = () => {
    cantidad <= 1 ? setCantidad(1) : setCantidad(cantidad - 1)};
  

  return (
    <>
    {console.log()}
    
      
      <Stack direction='row' spacing={4} align='center'>
      <ButtonGroup spacing='2'>
        <Button onClick={sumar} colorScheme='teal' variant='solid'>
           +
        </Button>
        <Link to={"/carrito"}>
          <Button disabled={stock <= 0}
          onClick={() => onAdd(prod, cantidad)}
          colorScheme='teal'>
            Comprar  {cantidad}
          </Button>
          </Link>
      <Button onClick={restar} colorScheme='teal' variant='solid'>
       - 
      </Button>
      </ButtonGroup>
      </Stack> 
      
    </>
  )
}
  
export default ItemCount


//agregarlo en list y el stock