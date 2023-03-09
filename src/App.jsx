
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './components/Home';
import Cart from './components/Cart';




const App = ()=> {
  
  
  return (
    <>
    <ChakraProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/catalogo" element={<ItemListContainer/>}/>
    <Route exact path="/category/:category" element={<ItemListContainer/>}/>
    <Route exact path="/producto/:id" element={<ItemDetailContainer/>}/>
    <Route exact path="/carrito" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </>
  )
};

export default App
