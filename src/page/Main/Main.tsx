import BotsList from '../../widget/BotsList/BotsList';
import DatePeriod from '../../widget/DatePeriod/DatePeriod';
import Header from '../../widget/Header/Header';
import Menu from '../../widget/Menu/Menu';
import VolatilityChart from '../../widget/VolatilityChart/VolatilityChart';
import Wallet from '../../widget/Wallet/Wallet';

import { BotProps, WalletProps } from '../../App';

import './Main.css';
import { FC, useEffect, useState } from 'react';

export type Period = "24h" | "7d" | "30d" | "all_time";

interface Props {
  data: WalletProps | undefined;
  bots: BotProps[];
}

export interface ChartProps {
  name: string;
  uv: number;
}

const Main: FC<Props> = ({ data, bots }) => {
  const [chartData, setChartData] = useState<ChartProps[]>([
    { name: '15', uv: 10 },
    { name: '16', uv: 11.11 },
    { name: '17', uv: 12.5 },
    { name: '18', uv: 10.2 },
    { name: '19', uv: 7.3 },
    { name: '20', uv: 11.5 },
    { name: '21', uv: 10 },
  ]);

  const [value, setValue] = useState<Period>(() => {
    const savedValue = localStorage.getItem('selectedPeriod');
    return (savedValue && ['24h', '7d', '30d', 'all_time'].includes(savedValue))
      ? (savedValue as Period)
      : '24h'; 
  });

  const [botsData, setBotsData] = useState<BotProps[]>(() => {
    const savedBots = localStorage.getItem('botsData');
    return savedBots ? JSON.parse(savedBots) : bots;
  });

  useEffect(() => {
    localStorage.setItem('selectedPeriod', value);

    const updatedBots = botsData.map((bot) => ({
      ...bot,
      currentPerformance: bot[value] || 0,
    }));

    setBotsData(updatedBots);
    localStorage.setItem('botsData', JSON.stringify(updatedBots));
  }, [value]);

  const getRandomDataCurrency = () => {
    const newChartData = chartData.map((chart) => ({
      ...chart,
      uv: +(Math.random() * 20).toFixed(1),
    }));
    setChartData(newChartData);
  };

  const handleSetValuePeriod = (date: Period) => {
    setValue(date);
  };

  if (!data) {
    return null;
  }

  return (
    <main>
      <Header getRandomDataCurrency={getRandomDataCurrency} />
      <Wallet trading_capital={0} trading_capital_currency={''} on_hold={0} {...data} />
      <VolatilityChart chartData={chartData} />
      <BotsList
        bots={bots}
        getRandomDataCurrency={getRandomDataCurrency}
        value={value}
      />
      <DatePeriod handleSetValuePeriod={handleSetValuePeriod} />
      <Menu />
    </main>
  );
};

export default Main;