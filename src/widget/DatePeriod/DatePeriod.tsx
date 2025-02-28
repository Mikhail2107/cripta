import { useState, useEffect } from 'react';
import { Period } from '../../page/Main/Main';
import './DatePeriod.css';

type FuncProps = {
  handleSetValuePeriod: (arg0: Period) => void;
};

const DatePeriod = ({ handleSetValuePeriod }: FuncProps) => {
  const [datePeriod] = useState([
    { id: 0, value: '24h', title: '24h' },
    { id: 1, value: '7d', title: '7d' },
    { id: 2, value: '30d', title: '30d' },
    { id: 3, value: 'all_time', title: 'За всё время' },
  ]);

  const [selectedPeriod, setSelectedPeriod] = useState<Period>(() => {
    const savedPeriod = localStorage.getItem('selectedPeriod');
    return (savedPeriod && ['24h', '7d', '30d', 'all_time'].includes(savedPeriod))
      ? (savedPeriod as Period)
      : '24h'; 
  });

  useEffect(() => {    
    handleSetValuePeriod(selectedPeriod);
  }, [selectedPeriod, handleSetValuePeriod]);

  const handlePeriodChange = (period: Period) => {
    setSelectedPeriod(period); 
    handleSetValuePeriod(period);
    localStorage.setItem('selectedPeriod', period); 
  };

  return (
    <>
      <div className="dateperiod__container">
        <ul className="time-range">
          <span className="range-title">Time Range:</span>
          {datePeriod.map((period) => (
            <li key={period.id}>
              <label
                htmlFor={period.value}
                onClick={() => handlePeriodChange(period.value as Period)}
                className={period.value} 
              >
                <input
                  type="radio"
                  className="range__item"
                  name="range"
                  id={period.value}
                  value={period.value}
                  checked={selectedPeriod === period.value} 
                />
                <span className="range__date">{period.title}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DatePeriod;