// BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Merceds', pv: 90},
  { name: 'Mazda', pv: 70 },
  { name: 'Tesla', pv: 60 },
  { name: 'Ferrari', pv: 10 },
];

const Dashboard = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#3bc9d8a0" label={{ position: 'top', formatter: (value) => `${value}%` }} />
        </BarChart>
    </ResponsiveContainer>
  );
};
export default Dashboard;
