import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'



const Nav = () => {
    const {qty} = useContext(CartContext)
    return (
       <nav>
           <ul className="left">
               <li>
                   <span className="header-title">
                   <Link to="/"><h6>Online Shopping</h6>  </Link>
                   </span>
               </li>
           </ul>
           <ul className='right'>

               <li>
                   <Link to="/cart">
                    <span className="shopping-cart">
                    <i className="fas fa-cart-arrow-down"></i>
                    <span className="product-count">{qty}</span>
                    </span>

                   </Link>
               </li>

           </ul>
       </nav>
    )
}

export default Nav
