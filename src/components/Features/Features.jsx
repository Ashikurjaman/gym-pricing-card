import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Features = ({features}) => {
    return (
        <div className='flex items-center'>
            <div>
            <CheckCircleIcon className="h-5 w-5 text-green-400" />
            </div>
            <div className='pl-2'>
            <p>{features}</p>
            </div>
        </div>
    );
};

export default Features;