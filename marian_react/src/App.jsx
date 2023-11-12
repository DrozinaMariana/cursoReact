import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNavegacion from './componentes/barraNav/BarraNavegacion';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import MenuSemanal from './componentes/menuSemanal/MenuSemanal';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <BarraNavegacion/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:category' element={<ItemListContainer/>}/>
          <Route path='/item/:comidaId' element={<ItemDetailContainer/>}/>
          <Route path='/menuSemanal' element={<MenuSemanal/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
