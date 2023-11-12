import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./api/context/AuthContext";
import  ProtectedRoute  from "./ProtectedRoute";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Astronomia from "./pages/Astronomia";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SingUP from "./pages/SignUp";
import Perfil from './pages/Perfil'
import LoginAdmin from './pages/Admin/LoginAdmin'
import IndexAdmin from "./pages/Admin/AdminDashBoard/adminDash";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import Physical from "./pages/fisica";
import Particlesbg from "./assets/particles/particlesBackground";
import UsuariosAdmin from "./pages/Admin/UsersAdmin";
function App() {
  return (
    <AuthProvider>
      
    <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="loginAdmin" element={<LoginAdmin />} />

            <Route path="SingUP" element={<SingUP />} />
            <Route path="/" element={<Index />} />
            <Route path="Astronomia" element={<Astronomia />} />
            <Route path="*" element={<Error />} />

            <Route element={<ProtectedRoute/>}>
              <Route path="/Perfil" element={<Perfil/>} />
            </Route>
            
            <Route element={<ProtectedRouteAdmin/>}>
            <Route path="indexAdmin" element={<IndexAdmin />} />
            <Route path="usuarios" element={<UsuariosAdmin/>} />
            </Route>

            <Route path="/Fisica" element={<Physical/>}/>
      </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      

    </AuthProvider>



    
  
  );
}

export default App;
