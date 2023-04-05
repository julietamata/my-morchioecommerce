import React from 'react'
import { useContext }  from 'react'
import { CartProvider } from '../context/CartContext'
import CartForm from './CartForm'
import { Card, CardHeader, CardBody, Flex, Image, Heading, Stack, Divider, ButtonGroup, Button, Text } from '@chakra-ui/react'
import Loading from '../components/Loading'


const Cart = () => {
  const {cart, setCart, totalCarrito, borrarCarrito, productosCarrito} = useContext(CartProvider);
    
  const eliminarProducto = (id) => {
    setCart(cart.filter(prod => prod.id !==id))
  }
  // {cart.map ((prod) =>{

    if (cart.length === 0){
      return(
        <>
        <Loading></Loading>
        </>
      )
    }
      return (
        <>
          <Card>
          <CardBody>
         <Flex justifyContent='center' gap='4'>
        {cart.map( prod =>  
     <div key={prod.id}>
     <Card maxW='sm'>
       <CardBody>
         <Image
          src={prod.img}     alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{prod.nombre}</Heading>
          <Text color='gray.600' fontSize='md'>
          $ {prod.precio}
          </Text>
          <Text color='gray.600' fontSize='md'>
            Cantidad: {prod.quantity}
          </Text>
          <Text fontSize='xl'>
            ${prod.quantity * prod.precio}
          </Text>
          <Button onClick={() => eliminarProducto(prod.id)}>
            Eliminar producto
          </Button>
        </Stack>
      </CardBody>     
    </Card>
    </div>
      )}
      </Flex>
      
      <CardBody>
        <Card>
      <Text fontSize='xl' textAlign='center'> Total: ${totalCarrito()} </Text>
      <Text fontSize='xl' textAlign='center'> Total de artículos: {productosCarrito()}</Text>
      
      <Button onClick={() => borrarCarrito()}> 
      Borrar carrito 
      </Button>
      </Card>
      </CardBody>
      
     <CartForm/>
     
     </CardBody>
     </Card>
        </>
      )
    // })}
    }

export default Cart




// return (
//   <div>
  
// {/* <Container key={prod.id}> */}
// {/* <Card maxW='sm'>
// <CardBody>
//   <Image
//     src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//     alt='Green double couch with wooden legs'
//     borderRadius='lg'
//   />
//   <Stack mt='6' spacing='3'>
//     <Heading size='md'>{prod.nombre}</Heading>
//     <Text color='blue.600' fontSize='2xl'>
//      $ {prod.precio}
//     </Text>
//     <Text color='blue.600' fontSize='2xl'>
//       {prod.quantity}
//     </Text>
//     <Button onClick={() => deleteProd()}>
//       Eliminar producto
//     </Button>
//   </Stack>
// </CardBody>
// <Divider />
// <CardFooter>
//    <CartForm/>
// </CardFooter>
// </Card> */}
// {/* </Container> */}
   
//   </div>
// )





 
        