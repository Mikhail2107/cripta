import Main from './page/Main/Main'

import './App.css'
import { useEffect, useState } from 'react'

export interface BotProps  {
  name: string;
  cost: number;
  all_time: number;
  '24h': number;
  '7d': number;
  '30d': number;
}
export interface WalletProps {
  bots: BotProps[];
  balance: number;
  onHold: number;
  tradingCapital: number;
  tradingCapitalCurrency: string;
}
function App() {
  const [data, setData] = useState<WalletProps>({
    bots: [],
    balance: 0,
    onHold: 0,
    tradingCapital: 0,
    tradingCapitalCurrency: ''
  });
  const [bots, setBots] = useState<BotProps[]>([]);  

useEffect(() => {
  fetch('/data.min.json').then(res => res.json()).then(dt => {
    setData(dt)
    setBots(dt.bots)})
}, [])

return (
  <>
    {data ? <Main data={data} bots={bots}/> : <div>Загрузка...</div>}
  </>
);

}

export default App;
