import React from 'react';

const Card = ({product}) => {
    return (
        <div className=''>
                <div className=''>
                <h2 className='text-center'>
                    <span className='text-6xl'>{product.customer.price}</span>
                    <span className='text-2xl'>/month</span>
                </h2>
                <h3 className='text-2xl text-center text-purple-800'>{product.membership_type}</h3>
                </div>
        </div>
    );
};

export default Card;