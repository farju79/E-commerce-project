import React, {useContext} from "react"
import {CartContext} from "../Global/CartContext"

const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
    console.log(shoppingCart);
    
    return(
        <div className="cart-container">
            <div className="cart-details" style={{marginTop: '100px'}}>
                {shoppingCart.length > 0 ? 
                   shoppingCart.map(cart => (
                       <div className="cart" key={cart.id}>
                           <span className="cart-image"><img src={cart.image} alt="not found" /></span>
                    <span className="cart-product-name">{cart.name}</span>
                    <span className="cart-product-price">${cart.price}.00</span>
                    <span className="inc"><i className="fas fa-plus"></i></span>
                    <span className="product-quantity">{cart.qty}</span>
                    <span className="dec"><i className="fas fa-minus"></i></span>
                    <span className="product-total-price">500.00</span>
                    <span className="delete-product"><i className="fas fa-trash-alt"></i></span>
                        </div>
                ))
                : 'sorry your cart is currently empty'}
            </div>
            {shoppingCart.length > 0 ? <div className="cart-summary">
                <div className="summary">
                    <h3>Cart Summary</h3>
                    <div className="total-items">
                        <div className="items">Total Items</div>
                        <div className="items-counts">{qty}</div>
                    </div>
                    <div className="total-price-section">
                        <div className="just-title">Total Price</div>
                        <div className="items-price">${totalPrice}.00</div>
                    </div>
                    <div className="stripe-section">
                        {/* stripe button */}
                    </div>    
                </div>
            </div> : ''}
        </div>
    )
}

export default Cart;