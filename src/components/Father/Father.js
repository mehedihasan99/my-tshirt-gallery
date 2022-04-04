import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ house }) => {
    return (
        <div>
            <h3>father</h3>
            <p>House {house}</p>
            <div className='children' style={{ display: 'flex' }}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;