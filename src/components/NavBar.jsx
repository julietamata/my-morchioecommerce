import React from 'react'
import CartWidget from './CartWidget'
import { Button, Stack,} from '@chakra-ui/react'


const NavBar = () => {
  return (
    <div>
        
        <Stack spacing={4} direction='row' align='center'>
            <h1> SARA MORCHIO </h1> 
            <Button colorScheme='teal' size='sm' >
                Zapatos
            </Button>
            <Button colorScheme='teal' size='sm'>
                Bisutería
            </Button>
            <Button colorScheme='teal' size='sm'>
                Lentes
            </Button>
            <CartWidget/>
        </Stack>
        
    </div>
  )
}

export default NavBar