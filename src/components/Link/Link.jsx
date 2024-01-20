/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 bg-purple-600 hover:bg-purple-800 text-white p-2'>
            
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;