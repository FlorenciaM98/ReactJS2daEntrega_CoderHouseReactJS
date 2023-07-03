import { Link, NavLink } from "react-router-dom";
import CartWidget from "./widgets/CartWidget";

function Navbar({titulo, avatar}) {

    return (
        <div className="navBar-container">
            <div className="navBar-titulo">{titulo}</div>
            <div className="navBar-avatar">
                <img src={ avatar } />
            </div>
            <div className="navBar-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="gallery">Gallery</NavLink>
            <NavLink to="contact-page">Contact  </NavLink>    
            </div>
            <CartWidget></CartWidget>
        </div>

    )
}

export default Navbar;