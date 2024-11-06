import { Card, List, Typography } from "antd";
import { useState } from "react";
import TotalUsersSkeleton from "../skeleton/totalUsers";
import {
  BarChat,
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

function TotalUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <div
        style={{
          height: "100%",
          backgroundColor: "#F7F9FB",
          borderRadius: "16px",
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
            renderItem={() => <TotalUsersSkeleton />}
          />
        ) : (
          <List>
            <div
              style={{ display: "flex", gap: "22px", alignContent: "center" }}
            >
              <div
                style={{ display: "flex", gap: "16px", alignItems: "center" }}
              >
                <h4>Total Users</h4>
                <p> Total Projects</p>
                <p>Operating Status |</p>
              </div>
              <div
                style={{ display: "flex", gap: "16px", alignSelf: "center" }}
              >
                <p>This Year </p>
                <p>Last Year</p>
              </div>
            </div>
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </List>
        )}
      </div>
    </div>
  );
}

export default TotalUsers;
