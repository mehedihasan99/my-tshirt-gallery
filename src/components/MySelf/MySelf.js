import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, gift }) => {
    return (
        <div>
            <h3>your!!</h3>
            <p><small>House:{house}</small></p>
            <Special></Special>
        </div>
    );
};

export default MySelf;