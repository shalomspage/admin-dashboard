import { Card, List, Typography } from "antd"
import { useState } from "react"
import MarketSeoSkeleton from "../skeleton/marketSeo";
import {
  BarChart,
  Bar,
  cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function MarketSeo() {
  const [isLoading, setIsLoading] = useState(false);
  const data = [
    {
      day: "05-01",
      temperature: [-1, 10],
    },
    {
      day: "05-02",
      temperature: [2, 15],
    },
    {
      day: "05-03",
      temperature: [3, 12],
    },
    {
      day: "05-04",
      temperature: [4, 12],
    },
    {
      day: "05-05",
      temperature: [12, 16],
    },
    {
      day: "05-06",
      temperature: [5, 16],
    },
    {
      day: "05-07",
      temperature: [3, 12],
    },
    {
      day: "05-08",
      temperature: [0, 8],
    },
    {
      day: "05-09",
      temperature: [-3, 5],
    },
  ];
  return (
    <div>
      <div
        style={{
          height: "100%",
          backgroundColor: "#fff8f8",
          borderRadius: "0px",
        }}
        headStyle={{ padding: "8px 16px" }}
        bodyStyle={{ padding: "0 1rem" }}
        title={
          <div
            style={{
              display: "flex",
              alignContent: "flex-start",
            }}
          >
            <Typography.Text size="sm" style={{ marginLeft: "0.2rem" }}>
              Request
            </Typography.Text>
          </div>
        }
      >
        {isLoading ? (
          <List
            itemLayout="horizontal"
            dataSource={Array.from({ length: 1 }).map((_, index) => ({
              id: index,
            }))}
            renderItem={() => <MarketSeoSkeleton />}
          />
        ) : (
          <List>
            <BarChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="temperature" fill="#8884d8" />
            </BarChart>
          </List>
        )}
      </div>
    </div>
  );
}

export default MarketSeo