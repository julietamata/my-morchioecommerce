import { createContext, useState } from 'react'
export const CartProvider = createContext([]);

const CartContext = ({children}) => {

  const [cart, setCart] = useState([]);

   //Función para añadir productos al carrito
     const agregarProductos = (prod, quantity) => {
      let nuevoCarrito;
      let producto = cart.find(producto => producto.id === prod.id);
      if (producto){
        producto.quantity += quantity;
        nuevoCarrito = [...cart];
      } else {
        producto = {...prod, quantity: quantity};
        nuevoCarrito= [...cart, producto];
      }
      setCart(nuevoCarrito)
      
    };
    //Función para sumar los productos del carrito
      const productosCarrito = () => cart.reduce((acc, productoExistente) => acc + productoExistente.quantity, 0);

    //Función para sumar el precio de los artículos del producto
    const totalCarrito = () => {
      return cart.reduce((bef, aft) => bef + aft.quantity * aft.precio, 0)
    }

    console.log('carrito', cart)

    const borrarCarrito = () => setCart([]);

    
  return (
    <CartProvider.Provider value= {{borrarCarrito, agregarProductos,productosCarrito, totalCarrito, cart, setCart}}>
        {children}
    </CartProvider.Provider>
  );

};

export default CartContext; 

