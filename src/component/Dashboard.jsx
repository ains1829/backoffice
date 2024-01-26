// BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Merceds', pv: 90 },
  { name: 'Mazda', pv: 70 },
  { name: 'Tesla', pv: 60 },
  { name: 'Ferrari', pv: 10 },
];

const Dashboard = () => {
  return (
    <ResponsiveContainer className="taille">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#1A1B41" label={{ position: 'top', formatter: (value) => `${value}%` }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default Dashboard;
