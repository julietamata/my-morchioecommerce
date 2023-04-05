import React from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { useState } from 'react'
import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Button, Flex, Box, Grid, Card, CardBody  } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartProvider } from '../context/CartContext'

const CartForm = () => {

  const {cart, totalCarrito, productosCarrito} = useContext(CartProvider);
  

const [orderId, setOrderId] = useState(null)
const [name, setName] = useState('')
const [email, setEmail] = useState('')

  const db =  getFirestore();

  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)

  const isError = name === ''
  const isErrors = email === ''

  const handleSubmit=(e)=>{
    e.preventDefault();
    addDoc(orderCollection, order).then(({id}) => setOrderId(id));
  };

  const order = {
    name, email, Items: cart.map(prod =>({id: prod.id, nombre: prod.nombre, precio: prod.precio }))
  };

  const orderCollection= collection(db, "orden");


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card> <CardBody> <Flex alignItems='center' justifyContent='center' >  
         <Box w='330px' >
        <FormControl isInvalid={isError}>
      <FormLabel>Nombre</FormLabel>
      <Input value={name} onChange={handleName} />
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
    <p>Orden No. {orderId}</p>
    </Box>
    </Flex>
</CardBody> </Card>
</form>
    </div>


  )
}

export default CartForm

