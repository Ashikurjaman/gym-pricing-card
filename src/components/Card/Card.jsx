/* eslint-disable react/prop-types */
import React from 'react';
import Features from '../Features/Features';

const Card = ({product}) => {
    return (
        <div className='bg-indigo-500 mt-12 p-3 flex flex-col rounded-md '>
                <div className='mt-5'>
                <h2 className='text-center'>
                    <span className='text-6xl'>{product.price}</span>
                    <span className='text-2xl'>/month</span>
                </h2>
                <h3 className='text-2xl text-center font-extrabold text-purple-800'>{product.membership_type}</h3>
                <div className='ml-12 mt-5 pb-3'>
                {
                    product.features.map((features,idx)=><Features key={idx} features={features}></Features>)
                }
                </div>

                </div>
                <button className='text-2xl text-green-200 font-semibold text-center w-full bg-green-700 p-4 rounded-md mt-auto'>Orders Now</button>
        </div>
    );
};

export default Card;