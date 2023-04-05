import React from 'react'
import { Card, HStack, Grid, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, ButtonGroup, Button, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, stock, category, img, }) => {
  return (
    
    <div>
      
      
      
          {<div key={id}>
          
           <Card maxW='sm'>
              <CardBody>
                <Image
                  src={img}
                  alt=''
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{nombre}</Heading>
                  <Text color='teal' fontSize='md'>
                    ${precio}
                  </Text>
                  <Text>Stock: {stock}</Text>
                  <Text> Categoría: {category}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                 <Button colorScheme='teal'>
                    <Link to={`/producto/${id}`}> Detalles </Link>
                  </Button>
                
              </CardFooter>
            </Card>
            
            </div>}
                  
       
    
</div>
  )
}

export default Item



{/* <Card maxW='sm' >
<CardBody>
  <Image
    src="https://cdn.stocksnap.io/img-thumbs/960w/people-woman_D85KN9KIDN.jpg"
    alt='producto'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>nombre</Heading>
    <Text color='teal' fontSize='md'>
      $precios
    </Text>
    <Text>Stock:</Text>
    <Text> Categoría: </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>
    <Button variant='ghost' colorScheme='teal'>
    
    </Button>
  </ButtonGroup>
</CardFooter>
</Card>
<Card maxW='sm'>
<CardBody>
  <Image
    src="https://cdn.stocksnap.io/img-thumbs/960w/people-woman_D85KN9KIDN.jpg"
    alt='producto'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>nombre</Heading>
    <Text color='teal' fontSize='md'>
      $precios
    </Text>
    <Text>Stock:</Text>
    <Text> Categoría: </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter >
   <Button  colorScheme='teal'>
    Details
  </Button>
  
</CardFooter>
</Card>
<Card maxW='sm'>
<CardBody>
  <Image
    src="https://cdn.stocksnap.io/img-thumbs/960w/people-woman_D85KN9KIDN.jpg"
    alt='producto'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Heading size='md'>nombre</Heading>
    <Text color='teal' fontSize='md'>
      $precios
    </Text>
    <Text>Stock:</Text>
    <Text> Categoría: </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
  <ButtonGroup spacing='2'>
    <Button variant='ghost' colorScheme='teal'>
    </Button>
  </ButtonGroup>
</CardFooter>
</Card>

  */}