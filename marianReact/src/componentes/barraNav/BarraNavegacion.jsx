import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../cardWidget/CardWidget';
import { Link } from 'react-router-dom';

function BarraNavegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to ={"/"}> <Navbar.Brand>Mia Pasta</Navbar.Brand></Link>
        <Link to={"menuSemanal"}>Menu Semanal</Link>
        <Link to={"fideos"}>Fideos</Link>
        <Link to={"ravioles"} >Ravioles</Link>
        <Link to={"agnolotis"}>Agnolotis</Link>
        <Link to={"/"}>Ver todos los platos</Link>
        <Link to={"/carrito"}><CardWidget/></Link>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;