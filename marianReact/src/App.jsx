import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacion from './componentes/barraNav/BarraNavegacion';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import MenuSemanal from './componentes/menuSemanal/MenuSemanal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext/CartContext';
import Carrito from './componentes/carrito/Carrito';
import Checkout from './componentes/checkout/Checkout';
function App() {


  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <BarraNavegacion />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:category' element={<ItemListContainer />} />
            <Route path='/item/:comidaId' element={<ItemDetailContainer />} />
            <Route path='/menuSemanal' element={<MenuSemanal />} />
            <Route path='/carrito'element={<Carrito/>} />
            <Route path='/checkout'element={<Checkout/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
