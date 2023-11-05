import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Astronomia from "./pages/Astronomia";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SingUP from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="SingUP" element={<SingUP/>}/>
        <Route path="/" element={<Index />} />
        <Route path="Astronomia" element={<Astronomia />}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
