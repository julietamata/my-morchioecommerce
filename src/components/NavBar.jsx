import React from 'react'
import CartWidget from './CartWidget'
import { Button, Stack, Flex, Box, Spacer, Heading, } from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div>        
        <Flex minWidth='max-content' alignItems='center' gap='2' bg='teal'>
        <Box>
        <Heading p='4' color='white'> SARA MORCHIO </Heading>
        </Box>
        <Spacer /> 
        <Stack gap='2' spacing={4} direction='row' align='center'>
            <Button boxShadow= 'dark-lg' colorScheme='teal' size='sm' >
                Zapatos
            </Button>
            <Button boxShadow= 'dark-lg' colorScheme='teal' size='sm'>
                Bisutería
            </Button>
            <Button boxShadow= 'dark-lg' colorScheme='teal' size='sm'>
                Lentes
            </Button>
            <CartWidget/>
        </Stack>
        </Flex>
    </div>
  )
}

export default NavBar
    
   