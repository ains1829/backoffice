import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = ({ data }) => {
  console.log(data)
  return (
    <ResponsiveContainer className="taille">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nommarque" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="vendue" fill="#1A1B41" label={{ position: 'top', formatter: (value) => `${value}` }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default Dashboard;
