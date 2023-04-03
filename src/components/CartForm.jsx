import React from 'react'
// import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from 'react'
import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, Flex, Box, Grid  } from '@chakra-ui/react'
  

const CartForm = () => {


const [name, setName] = useState('')
const [email, setEmail] = useState('')

  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)

  const isError = name === ''
  const isErrors = email === ''

  return (
    <div>

        <Box w='330px' >

        <FormControl isInvalid={isError}>
      <FormLabel>Nombre</FormLabel>
      <Input type='email' value={name} onChange={handleName} />
      {!isError ? (
        <FormHelperText>
          Ingrese su nombre de usuario para crear su nueva cuenta.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Ingrese un nombre de usuario</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={isErrors}>
     <FormLabel>Email</FormLabel>
      <Input type='email' value={email} onChange={handleEmail} />
      {!isErrors ? (
        <FormHelperText>
          Ingrese su correo para crear su nueva cuenta.
        
        <Button type="submit" mt={4} colorScheme='teal' >
        Hacer pedido
        </Button>
        </FormHelperText>
      ) : (
        <FormErrorMessage>Ingrese un correo electrónico</FormErrorMessage>
      )}
    </FormControl>  
    
    </Box>
    
    </div>


  )
}

export default CartForm

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [orderId, setOrderId] =useState(null);
// FORMULARIO
// <form onSubmit={handleSubmit}>
//   <input type="text" placeholder='Nombre y Apellido' onChange={(e)=>setName(e.target.value)} />
//   <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
//   <button type='submit'>Enviar info</button>

// </form>

// <p>No. de orden: {orderId}</p>

// border='1px' borderColor='gray.200'