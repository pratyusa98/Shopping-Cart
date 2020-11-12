import React, { useContext } from 'react'
import { CartContext } from '../Global/CartContext'


const Cart = () => {

    
    
    const {shoppingCart,totalPrice,qty,dispatch} = useContext(CartContext)
   
    return (
        <div className="cart-container">
            <div className="cart-details">
                <h1>Your Cart Page</h1>
               {shoppingCart.length > 0 ? 
               
                shoppingCart.map(cart=>(
                    <div className="cart" key={cart.id}>

                <span className="cart-image"> <img src={cart.image} alt="not found" /> </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">${cart.price}.00</span>
                <span className="inc"  onClick={() => dispatch({type:'INC',
                id:cart.id,
                cart
            })}><i className="fas fa-plus"></i></span>
                <span className="product-quantity">{cart.qty}</span>

                <span className="dec" onClick={() => dispatch({type:'DEC',
                id:cart.id,
                cart
            })}><i className="fas fa-minus"></i></span>

            <span className="totla-price">${cart.price * cart.qty}.00</span>
                <span className="delete" onClick={() => dispatch({type:'DEL',
                id:cart.id,
                cart
            })}><i className="fas fa-trash-alt"></i></span>

                    </div>
                ))
               
               : 'Sorry Cart Is empty'}

            </div>
            {
                shoppingCart.length > 0 ? 
                
                <div className="cart-summary">
                    <div className="summary">
                        <h3>Cart_Summary</h3>
                        <div className="total-item">
                            <div className="items">Total Items</div>
                            <div className="item-count">{qty}</div>
                        </div>
                        <div className="total-price">
                           <div className="price">Total Price</div>
                            <div className="item-price">${totalPrice}.00</div>
                        </div>
                    </div>
                    <div className="checkout">
                        Checkout
                    </div>
                </div>
                
                : ''
            }
        </div>
    )
}

export default Cart
