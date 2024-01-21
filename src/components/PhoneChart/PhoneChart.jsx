import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneChart = () => {
    const [product,setProduct] = useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const loadData = data.data.data;
            const phoneInfo =loadData.map(phone=>{
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                
                const phoneData={
                    name:phone.phone_name,
                    price:price
                    

                }
                return phoneData;
                
            })
            setProduct(phoneInfo);
            console.log(phoneInfo);
            
        })
        
    },[])
    return (
        <div className='mt-20'>
            <h2></h2>
            <BarChart width={1000} height={300} data={product}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"  />
            <YAxis />
                <Tooltip />
                <Legend />
            </BarChart>
        </div>
    );
};

export default PhoneChart;