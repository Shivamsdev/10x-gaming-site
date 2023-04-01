import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import "./header.css"

const Header = () => {
    const {cartData}=useContext(CartContext)
    return (
        <>
         <nav className="navbar">
            <section className="log">
                10x-Gama site
          </section>
            <span>cartData.length</span>
         <section>
            <i className="fa fa-shopping-cart "></i>
         </section>
         </nav>
        </>
    )
}
export default Header;