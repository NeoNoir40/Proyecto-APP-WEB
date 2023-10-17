import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Astronomia from "./pages/Astronomia";
import Error from "./pages/Error";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Astronomia" element={<Astronomia />}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
