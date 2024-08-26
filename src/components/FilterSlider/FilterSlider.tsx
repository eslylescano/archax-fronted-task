import React, { useState, useEffect } from 'react';
import './FilterSlider.css';

interface FilterSliderProps {
  minSpend: number | null;
  maxSpend: number | null;
  onChange: (value: number) => void;
}

const FilterSlider: React.FC<FilterSliderProps> = ({ minSpend, maxSpend, onChange }) => {
  // Set initial value to the middle of minSpend and maxSpend
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (minSpend !== null && maxSpend !== null) {
      setValue((minSpend + maxSpend) / 2);
    }
  }, [minSpend, maxSpend]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="filter-slider">
      <h3 className="filter-slider-title">Filters</h3>
      <p className="filter-slider-description">Spending</p>
      <div className="filter-slider-container">
        <input 
          type="range" 
          min={minSpend ?? 0} 
          max={maxSpend ?? 100} 
          value={value} 
          onChange={handleFilterChange} 
        />
      </div>
      <div className="filter-slider-range">
        <p className="filter-slider-range-paragraph">${minSpend ?? 0}</p>
        <p className="filter-slider-range-paragraph">${value.toLocaleString()}</p>
        <p className="filter-slider-range-paragraph">${maxSpend ?? 100}</p>
      </div>
    </div>
  );
}

export default FilterSlider;
