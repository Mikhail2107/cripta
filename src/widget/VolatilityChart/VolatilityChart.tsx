import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './VolatilityChart.css';

interface ChartProps {
  name: string;
  uv: number;
}
interface ChartDataProps {
  chartData: ChartProps[]; 
}

const VolatilityChart = ({ chartData }: ChartDataProps) => {

  return (
    <>
      <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#2282e5" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#1d2637" stopOpacity={0}/>
    </linearGradient>
  </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#2282e5" fill="url(#colorPv)"  />
        </AreaChart>
      </ResponsiveContainer>
        
      </div>
    </>
  )
};

export default VolatilityChart;