import { Card, List, Typography } from "antd"
import { useState } from "react"
import TrafficWebsiteSkeleton from "../skeleton/trafficWebsite";

function TrafficWebsite() {
    const [isLoading, setIsLoading] = useState(true);
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
            ></div>
          }
        >
          {isLoading ? (
            <List
              itemLayout="horizontal"
              dataSource={Array.from({ length: 3 }).map((_, index) => ({
                id: index,
              }))}
              renderItem={() => <TrafficWebsiteSkeleton />}
            />
          ) : (
            <List>
              <div>
                <h4>Traffic by Website</h4>
                <p
                  style={{
                    font: "inter",
                    fontWeight: "400",
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#1c1c1c",
                  }}
                >
                  Google
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
                  YouTube
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
                  Instagram
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
                  Pinterest
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
                  Facebook
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
                  Twitter
                </p>
              </div>
            </List>
          )}
        </div>
      </div>
    );
}

export default TrafficWebsite