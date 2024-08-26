import { useState, useEffect } from 'react';

const useData = () => {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [filterValue, setFilterValue] = useState<number>(0);
  const [minSpend, setMinSpend] = useState<number | null>(null);
  const [maxSpend, setMaxSpend] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/data')
      .then(response => response.json())
      .then(data => {
        setData(data);

        const spends = data.map((item: { spend: number; }) => item.spend);
        const min = Math.min(...spends);
        const max = Math.max(...spends);

        setMinSpend(min);
        setMaxSpend(max);


        setFilterValue((min + max) / 2);
        setFilteredData(data.filter((item: { spend: number; }) => item.spend <= (min + max) / 2));
      });
  }, []);

  useEffect(() => {
    if (minSpend !== null && maxSpend !== null) {
      const result = data.filter(item => item.spend <= filterValue);
      setFilteredData(result);
    }
  }, [filterValue, data, minSpend, maxSpend]);

  const handleFilterChange = (value: number) => {
    setFilterValue(value);
  };

  return {  filteredData, handleFilterChange, minSpend, maxSpend };
};

export default useData;
