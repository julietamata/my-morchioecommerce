
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';




const App = ()=> {
  
  const nombre = "coderhouse"
  
  

  return (
    <>
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer greeting={"Te invitamos a explorar nuestra tienda en línea"}/>
    </ChakraProvider>
    </>
  )
};

export default App

  