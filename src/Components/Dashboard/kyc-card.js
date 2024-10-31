import { Card, List, Typography } from "antd";
import { useState } from "react";
import CardKycSkeleton from "../skeleton/cardKyc";

function KycCard() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "100%",
          backgroundColor: "#E5ECF6",
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
            renderItem={() => <CardKycSkeleton />}
          />
        ) : (
          <List></List>
        )}
      </div>
    </div>
  );
}

export default KycCard;
