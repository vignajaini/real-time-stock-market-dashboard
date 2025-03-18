import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const MutualFunds = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    const mockFunds = Array.from({ length: 10 }, () => ({
      name: faker.company.name(),
      risk: faker.helpers.arrayElement(["Low", "Medium", "High"]),
      returns: faker.finance.amount(5, 20, 2),
      expenseRatio: faker.finance.amount(0.5, 2, 2),
    }));

    setFunds(mockFunds);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {funds.map(({ name, risk, returns, expenseRatio }, index) => (
        <div key={index} className="p-4 shadow-md rounded-lg bg-white">
          <h2 className="text-lg font-bold">{name}</h2>
          <p>Risk: <span className="font-semibold">{risk}</span></p>
          <p>Returns: <span className="text-green-600">{returns}%</span></p>
          <p>Expense Ratio: <span className="text-gray-600">{expenseRatio}%</span></p>
        </div>
      ))}
    </div>
  );
};

export default MutualFunds;
