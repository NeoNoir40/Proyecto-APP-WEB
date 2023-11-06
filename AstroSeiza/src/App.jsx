import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Nosotros from "./pages/nosotros";
import Quimica from "./pages/quimica";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Quimica" element={<Quimica/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
