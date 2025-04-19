
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext'; 
import Layout from '../layouts/Layout';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate();

  // Calculate the total amount of the cart
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Save cart items in localStorage to retrieve later in Address page
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Navigate to Address page for address input
    navigate('/getCurrentAddress');
  };

  const handleBuyNow = () => {
    navigate('/getCurrentAddress'); // Navigate to the Address page
  };

  return (
    <Layout>
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                  {item.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`${item.title} ${index + 1}`} />
                    </div>
                  ))}
                </Carousel>
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <div className="cart-item-actions">
                    <div className="quantity">
                      <button onClick={() => decrementQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
            {/* Total Amount Display */}
            <div className="cart-total">
              <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            </div>

            <div className="cart-actions">
              {/* <button onClick={handlePlaceOrder}>Place Order</button> */}
              <button onClick={handleBuyNow}>Buy Now</button>
              <button className="clear-cart-button" onClick={clearCart}>Empty Cart</button>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
