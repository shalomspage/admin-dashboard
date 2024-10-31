import { Card, List, Typography } from "antd";
import { useState } from "react";
import CardRequestSkeleton from "../skeleton/cardRequest";

function CardRequest() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "100%",
          minWidth: "200px",
          backgroundColor: "#E3F5FF",
          borderRadius: "16px",
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
            renderItem={() => <CardRequestSkeleton />}
          />
        ) : (
          <List></List>
        )}
      </div>
    </div>
  );
}

export default CardRequest;
