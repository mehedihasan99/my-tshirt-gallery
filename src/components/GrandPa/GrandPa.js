import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'
export const GiftContext = createContext("diamond");

const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const handleHouse = () => setHouse(house + 1);
    const gift = "Golden air";
    return (
        <GiftContext.Provider value={gift}>
            <div className='grandPa'>
                <h2>Here is your GrandPa</h2>
                <p>House: {house}</p>
                <button onClick={handleHouse}>Update House</button>
                <div className='grandPa-items'>
                    <Father house={house} ></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </GiftContext.Provider>
    );
};

export default GrandPa;