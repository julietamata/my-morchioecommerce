import React from 'react'
import CartWidget from './CartWidget'
import { Button, Stack, Flex, Box, Spacer, Heading, Text} from '@chakra-ui/react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div>        
        <Flex minWidth='max-content' alignItems='center' gap='2' bg='teal'>
        <Box>
         
        <Heading p='4' color='white'> <Link to={"/"}> SARA MORCHIO </Link> </Heading>
        
        </Box>
        <Spacer /> 
        <Stack gap='2' spacing={4} direction='row' align='center'>

            <Link to={"/catalogo"}>
            <Button boxShadow= 'dark-lg' colorScheme='teal' size='md' >
                PRODUCTOS
            </Button>
            </Link>

            <Link to={`/category/${"Zapatos"}`}>
            <Button boxShadow= 'dark-lg' colorScheme='teal' size='sm' >
                Zapatos
            </Button>
            </Link>

            <Link to={`/category/${"Bisutería"}`}>
            <Button boxShadow= 'dark-lg' colorScheme='teal' size='sm'>
                Bisutería
            </Button>
            </Link>

            <Link to={`/category/${"Accesorios"}`}>
            <Button boxShadow= 'dark-lg' colorScheme='teal' size='sm'>
                Accesorios
            </Button>  
            </Link>

            <Link to={"/cart"}>           
            <CartWidget/>
            </Link>
            
        </Stack>
        </Flex>
    </div>
  )
}

export default NavBar
    
   