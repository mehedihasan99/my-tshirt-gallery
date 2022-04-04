import React from 'react';
import './Cart.css'
const Cart = ({ cart, RemoveFromCart }) => {
    // console.log(cart); 
    // conditional rendering options
    //condition 1: make a element variable
    let command;
    if (cart.length === 0) {
        command = <p>Please Add Some Items</p>
    }
    else if (cart.length === 1) {
        command = <div>
            <p>Please Add More Items</p>
        </div>
    }
    else {
        command = <div>
            <p>Thanks For Adding Item</p>
        </div>
    }
    return (
        <div>
            <h2>This is card :{cart.length}</h2>
            {
                cart.map(cardItem => <div>
                    <p>{cardItem.name}
                        <button onClick={() => RemoveFromCart(cardItem)}>X</button>
                    </p>
                </div>)
            }
            {/* &&=(means -- true), ||=(means false) 
            ------ Syntax of: && 
            condition &&(true) execute 
            ---- Syntax of ||(false)
            condition ||(false) execute
            */}

            {cart.length === 3 && <p className='orange'>Added Three Item, YaY</p>}
            {cart.length === 0 || <p className='red'>YaH, You are buying</p>}

            {command}
            {/* ternary operator */}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove</button>}
        </div>
    );
};

export default Cart;