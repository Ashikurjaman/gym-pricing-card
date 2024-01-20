import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Price = () => {
    const [products,setProduct] = useState([])
    useEffect(()=>{
            fetch('product.json')
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[])
    
    return (
        <div>
            <h1 className='text-6xl p-4 bg-purple-400 text-purple-900 text-center '>Awesome Affordable Price</h1>

            <div className='grid grid-cols-3 gap-3  '>
                {
                    products.map(product=><Card key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Price;