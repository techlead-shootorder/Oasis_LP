"use client"
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'

const ProgressBar = ({ IUI_SUCCESS_RATE }) => {

    return (
        <>
            <ResponsiveContainer width="100%" height="100%" aspect={2} >
                <BarChart data={IUI_SUCCESS_RATE} width={500} height={300} margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                    <CartesianGrid startOffset="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Percentage" fill='#6F3161' />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

export default ProgressBar;