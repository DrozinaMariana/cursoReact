import BarraNav from "./componentes/nav/Nav";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";

function App() {
  
  const saludo= " Bienvenidos a Mia Pasta. Les presentamos las mejores pastas de la web. Hace tu pedido y comprobalo. Te esperamos"
  return (
    <>
      <BarraNav/>
      <ItemListContainer mensaje={saludo}/>
    </>
  )
}

export default App
