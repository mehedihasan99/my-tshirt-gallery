import React, { useContext } from 'react';
import { GiftContext } from '../GrandPa/GrandPa';

const Special = () => {
    const ring = useContext(GiftContext);
    return (
        <div>
            <div>
                <p>special</p>
                <p>Ring: {ring}</p>
            </div>
        </div>
    );
};

export default Special;