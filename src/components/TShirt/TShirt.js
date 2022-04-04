import React from 'react';
import './TShirt.css'
const TShirt = (props) => {
    // console.log(props);
    const { tShirt, handleToCard } = props;
    const { name, picture, price, _id } = tShirt;
    return (
        <div className='tShirt-cart'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={() => handleToCard(tShirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;