import React, { useEffect, useState } from 'react'
import data from '../../data.json'
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Image, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom'


const ItemDetail = () => {
  const {id} =useParams();
  
  const [datos, setDatos] = useState([]);
    const getDatos = () =>{
    return new Promise((resolve, reject) =>{
      if (getDatos === 0) {
        reject(new Error(" hay datos"));
      }resolve(data);
      // console.log(data)
      {console.log(prod)}
    });
  };
  
  useEffect(() => {
    getDatos().then((datos) => setDatos(datos))
    },[] )

  const idFilter = datos.filter((prod) => prod.id === id);
  
  return (
    
    <>
    
    {idFilter.map((prod) =>(  
      
    <div key={prod.id}>
      <Card maxW='sm'>
      <CardBody>
        <Image
          src={prod.img}
          alt='Prenda'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{prod.nombre}</Heading> 
          <Text color='teal' fontSize='md'>
            ${prod.precio}
          </Text>
          <Text> Categoría: {prod.category}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <ItemCount stock={prod.stock} />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button colorScheme='teal'>
            Comprar
          </Button>
        </ButtonGroup>
      </CardFooter>
</Card>
</div>
    
    ))};
   
    </>
  )
}

export default ItemDetail