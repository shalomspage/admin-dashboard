import { Card, List, Typography } from "antd"
import { useState } from "react"
import ReportsGeneratedSkeleton from "../skeleton/reportsGenerated";
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

function ReportsGenerated() {
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    {
      device: "Linux",
      temperature: [-1, 10],
    },
    {
      device: "Mac",
      temperature: [-1, 15],
    },
    {
      device: "iOS",
      temperature: [-1, 12],
    },
    {
      device: "Windows",
      temperature: [-1, 12],
    },
    {
      device: "Andrioid",
      temperature: [-1, 16],
    },
    {
      device: "Others",
      temperature: [-1, 16],
    },
  ];
  return (
    <div>
      <div
        style={{
          height: "100%",
          backgroundColor: "#fff8f8",
          borderRadius: "10px",
          padding: "24px",
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
            dataSource={Array.from({ length: 3 }).map((_, index) => ({
              id: index,
            }))}
            renderItem={() => <ReportsGeneratedSkeleton />}
          />
        ) : (
          <List>
            <BarChart
              width={600}
              height={250}
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <XAxis dataKey="device" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="temperature" fill="#8884d8" width={20} />
            </BarChart>
          </List>
        )}
      </div>
    </div>
  );
}

export default ReportsGenerated