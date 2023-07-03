import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Galeria from "./pages/galeria/Galeria";
import Error from "./pages/Error";
import ProductPage from "./pages/galeria/ProductPage";
import Navbar from "./Navbar";
import "./styles/style.scss";
import avatar from "./imgs/avatarNavbar.jpg";
import Contact from "./pages/contact";

function App() {
    
    return (
        <div className="body">
            <BrowserRouter>
            <Navbar titulo="Portfolio" avatar={avatar}/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Error />} />
                <Route path="gallery" element={<Galeria />} /> 
                <Route path="gallery/:productId" element={<ProductPage />} />    
                <Route path="/contact-page" element={<Contact/>} />    
                </Routes>    
            </BrowserRouter>
        </div>
    )
}

export default App;