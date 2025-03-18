

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { faker } from "@faker-js/faker";

const FNO = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const mockData = Array.from({ length: 10 }, (_, i) => ({
      day: `Day ${i + 1}`,
      price: faker.finance.amount(1000, 5000, 2),
    }));

    setData(mockData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold">📈 Futures & Options Data</h2>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default FNO;
