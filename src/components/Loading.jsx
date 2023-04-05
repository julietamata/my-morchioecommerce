import React, { useEffect } from 'react'
import image3 from '../assets/images/pngegg.png'
import { Link } from 'react-router-dom'
import { Button, CardHeader, Heading, CardBody, Image, CardFooter, Card, SimpleGrid, Box, } from '@chakra-ui/react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'




const Loading = () => {
  return (
    <div>

<Card align='center'>
  <CardHeader>
    <Heading color='gray' textAlign={'center'} size='md'> ¡Oops! Aún no hay artículos en tu carrito, te invitamos a seguir explorando.</Heading>
  </CardHeader>
  <CardBody>
    <Image src={image3}></Image>
    </CardBody>
  <CardFooter>
    <Link to={"/catalogo"}>
    <Button colorScheme='gray'>Buscar productos</Button>
    </Link>
  </CardFooter>
</Card>





    </div>
  )
}

export default Loading














