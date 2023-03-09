import React from 'react'
import { useState } from 'react';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'


const ItemCount = (stock) => {

  const [cantidad, setCantidad] = useState(1);
  const sumar = () => {
    cantidad > stock ? alert("Lo sentimos, no hay suficientes productos disponibles") : setCantidad(cantidad + 1);}
  const restar = () => {
    cantidad <= 0 ? setCantidad(0) : setCantidad(cantidad - 1)};
  
  
  return (
    <>
      <Flex>
      <Stack direction='row' spacing={4} align='center'>
        <Button onClick={sumar} colorScheme='teal' variant='solid'>
           +
        </Button>
      <Text> {cantidad} </Text>
      <Button onClick={restar} colorScheme='teal' variant='solid'>
       -
      </Button>
      </Stack> 
      </Flex>
    </>
  )
}

export default ItemCount


//agregarlo en list y el stock