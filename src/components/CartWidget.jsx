import React from 'react'
import { Button, Stack, Flex, Box, Spacer, Heading, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const CartWidget = () => {
  return (
    <div> 
      <Flex p='4' color='white'>
        <Link to={"/carrito"}>
       <span className="material-symbols-outlined">shopping_bag</span>
        </Link>
        <h1>1</h1>
      </Flex>       
    </div>
  )
}

export default CartWidget