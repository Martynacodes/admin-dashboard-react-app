import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    books: 4000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    books: 2000,
    clothes: 1098,
    electronic: 2410,
  },
  {
    name: "Tue",
    books: 2000,
    clothes: 1080,
    electronic: 2290,
  },
  {
    name: "Wed",
    books: 2780,
    clothes: 3908,
    electronic: 900,
  },
  {
    name: "Thu",
    books: 1890,
    clothes: 4200,
    electronic: 2181,
  },
  {
    name: "Fri",
    books: 3990,
    clothes: 4800,
    electronic: 2500,
  },
  {
    name: "Sat",
    books: 3490,
    clothes: 4300,
    electronic: 3100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#c0355f"
              fill="#c0355f"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#27cdf2"
              fill="#27cdf2"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#0798f2"
              fill="#0798f2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
