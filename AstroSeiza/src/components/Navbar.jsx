import { Link } from "react-router-dom";
import { useAuth } from "../api/context/AuthContext";
import  NavbarNoUsers  from '../components/Navbar/nonUser.navbar'; 
import  NavbarUser from '../components/Navbar/userNavbar'
export default function Navbar() {

  const {user} = useAuth();
  const { isAuthenticated, isAuthenticatedAdmin } = useAuth();
  // Elementos de Navbar para usuarios autenticados no administradores
  const userLinks = isAuthenticated && !isAuthenticatedAdmin && (
    <NavbarUser params={user.nombre}/>
  );


  // Elementos de Navbar para usuarios no autenticados
  const guestLinks = !isAuthenticated && !isAuthenticatedAdmin && (
    <NavbarNoUsers/>
  );

  return (
      
      <>
        {userLinks}
        {guestLinks}
      </>
  );
}
