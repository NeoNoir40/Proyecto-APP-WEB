import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Physical from "./pages/fisica";
import Particlesbg from "./assets/particles/particlesBackground";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/Fisica" element={<Physical/>}/>
      </Routes>
      <Footer/>
      <Particlesbg/>
    </BrowserRouter>
  );
}

export default App;
