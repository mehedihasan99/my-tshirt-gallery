import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tShirts, setTShirt] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleToCard = cartItem => {
        const exitCard = cart.find(item => item._id === cartItem._id);
        if (!exitCard) {
            const newCart = [...cart, cartItem];
            setCart(newCart);
        }
    }
    const RemoveFromCart = cardItem => {
        const rest = cart.filter(item => item._id !== cardItem._id);
        setCart(rest);
    }
    // console.log(tShirts);
    return (
        <div className='home-product-container'>
            <div className="tShirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleToCard={handleToCard}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    RemoveFromCart={RemoveFromCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;