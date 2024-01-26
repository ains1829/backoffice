// BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Andy', vendue: 10 },
  { name: 'Mirado', vendue: 5 },
  { name: 'Miarotiana', vendue: 60 },
  { name: 'Tafita', vendue: 10 },
  { name: 'Hasinjara', vendue: 10 },
  { name: 'Mananjara', vendue: 10 },
  { name: 'Teddy', vendue: 10 },
];
const OtherDashboard = () => {
  return (
    <ResponsiveContainer className="taille">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="vendue" fill="#1A1B41" label={{ position: 'top', formatter: (value) => `${value} vendue` }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default OtherDashboard;
