import { Chart } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

function Doughnut() {
  const charRef = useRef(null);
  useEffect(() => {
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
          hoverbackgroundColor: ["#1babab", "#ab1b1d", "#41ab1b", "#201bab"],
        },
      ],
    };
    const ctx = charRef.current.getContext("2d");
    const doughnutGraph = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutoutPercentage: 30,
        reponsive: true,
        plugins: {
          legend: {
            position: "right",
            width: "300px",
          },
        },
      },
    });
    return () => {
      doughnutGraph.destroy();
    };
  }, []);
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <canvas ref={charRef} style={{ width: "200px" }}></canvas>
    </div>
  );
}

export default Doughnut;
