import { Card, List, Typography } from "antd";
import { useRef, useEffect, useState } from "react";
import TrafficLocationSkeleton from "../skeleton/trafficLocation";
import { Chart } from "chart.js";

function TrafficLocation() {
  const charRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const data = {
    labels: ["Nigeria", "Ghana", "Kenya", "Benin Republic"],
    datasets: [
      {
        data: [38.6, 22.5, 30.8, 8.1],
        backgroundColor: [
          "rgba(28, 28, 28, 1)",
          "rgba(28, 28, 28, 0.8)",
          "rgba(28, 28, 28, 0.8)",
          "rgba(28, 28, 28, 0.8)",
        ],
        hoverBackgroundColor: ["#1babab", "#ab1b1d", "#41ab1b", "#201bab"],
      },
    ],
  };

  const renderChart = () => {
    const ctx = charRef.current.getContext("2d");
    const doughnutGraph = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutoutPercentage: 30,
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            width: "300px",
          },
        },
      },
    });

    return doughnutGraph;
  };

  // useEffect(() => {
  //   const doughnutGraph = renderChart();

  //   return () => {
  //     doughnutGraph.destroy();
  //   };
  // }, []);

  return (
    <div>
      <div
        className="chart-container"
        style={{
          height: "100%",
          backgroundColor: "#fff8f8",
          borderRadius: "16px",
          padding: "20px",
        }}
        headStyle={{ padding: "8px 16px" }}
        bodyStyle={{ padding: "0 1rem" }}
        title={
          <div style={{ display: "flex", alignContent: "flex-start" }}>
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
            renderItem={() => <TrafficLocationSkeleton />}
          />
        ) : (
          <List>
            <div style={{ width: "200px", height: "200px" }}>
              <canvas ref={charRef} style={{ width: "200px" }}></canvas>
            </div>
          </List>
        )}
      </div>
    </div>
  );
}

export default TrafficLocation;
