import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Astronomia from "./pages/Astronomia";
import Error from "./pages/Error";
import Dashboard from "./dashboard/dashboard";
import NuevoUsuario from "./dashboard/newUser";
import EditUser from "./dashboard/editUser";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Astronomia" element={<Astronomia />} />
          <Route path="/Dash/:id" element={<Dashboard />} />
          <Route path="/New" element={<NuevoUsuario />} />
          <Route path="/Update/:id" element={<EditUser />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
