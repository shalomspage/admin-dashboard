import { Card, List, Typography } from "antd";
import { useState } from "react";
import CardRequestSkeleton from "../skeleton/cardRequest";

function CardRequest() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div
        style={{
          backgroundColor: "#E3F5FF",
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
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
          <List>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              <p
                style={{
                  font: "inter",
                  fontWeight: "400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  marginTop: "30px",
                }}
              >
                Requests
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "-20px",
                }}
              >
                <p
                  style={{
                    font: "inter",
                    fontWeight: "600",
                    fontSize: "24px",
                    lineHeight: "36px",
                    color: "#1c1c1c",
                  }}
                >
                  7,265
                </p>
                <p
                  style={{
                    font: "inter",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#1c1c1c",
                  }}
                >
                  +11.02%
                </p>
              </div>
            </div>
          </List>
        )}
      </div>
    </div>
  );
}

export default CardRequest;
