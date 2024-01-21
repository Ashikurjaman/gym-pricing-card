/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
  const  students = [
        {"id": 1, "name": "Alice", "math": 85, "phy": 90, "chy": 78},
        {"id": 2, "name": "Bob", "math": 92, "phy": 88, "chy": 95},
        {"id": 3, "name": "Charlie", "math": 78, "phy": 85, "chy": 80},
        {"id": 4, "name": "David", "math": 95, "phy": 89, "chy": 92},
        {"id": 5, "name": "Eva", "math": 88, "phy": 94, "chy": 87},
        {"id": 6, "name": "Frank", "math": 75, "phy": 80, "chy": 85},
        {"id": 7, "name": "Grace", "math": 91, "phy": 93, "chy": 89},
        {"id": 8, "name": "Henry", "math": 82, "phy": 85, "chy": 78},
        {"id": 9, "name": "Ivy", "math": 87, "phy": 92, "chy": 94},
        {"id": 10, "name": "Jack", "math": 89, "phy": 86, "chy": 90},
        {"id": 11, "name": "Kate", "math": 93, "phy": 91, "chy": 96},
        {"id": 12, "name": "Liam", "math": 80, "phy": 84, "chy": 82},
    ]
    
    return (
        
        <div className='mt-20' width="100%" height="100%">
            <h2 className='  border-2 border-indigo-600 text-5xl text-green-700 text-center p-4'>Dashboard</h2>
            <LineChart className='mt-4'
                width={800}
                height={500}
                data={students}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
            >
                
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" stroke="#8884d8" activeDot={{ r: 8 }} dataKey="math"></Line>
                <Line type="monotone" stroke="#82ca9d" activeDot={{ r: 8 }} dataKey="phy"></Line>
                <Line type="monotone" stroke="#82ca12" activeDot={{ r: 8 }} dataKey="chy"></Line>

            </LineChart>
        </div>
        
    );
};

export default Dashboard;