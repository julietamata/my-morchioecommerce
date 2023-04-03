import React from 'react'
import { useContext }  from 'react'
import { Button, Stack, Flex, Box, Spacer, Heading,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CartProvider } from '../context/CartContext'



const CartWidget = () => {

  const {productosCarrito} = useContext(CartProvider)

  return (
    <div>   <Link to={"/carrito"}>
       <Flex p='4' color='white'>
       <span className="material-symbols-outlined">shopping_bag</span>         
        <Text color='white' > {productosCarrito() || '0' } </Text>          
      </Flex>       
      </Link>
    </div>
  )
}

export default CartWidget