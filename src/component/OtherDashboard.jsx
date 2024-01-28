// BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const OtherDashboard = ({ data }) => {
  console.log(data)
  return (
    <ResponsiveContainer className="taille">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nomlieu" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="vendue" fill="#1A1B41" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default OtherDashboard;
