import { Badge, List, Typography, Skeleton } from "antd"

function MarketSeoSkeleton() {
    return (
      <List.Item>
        <List.Item.Meta
          avatar={<Badge color="transparent" />}
          title={
            <Skeleton.Button
              active
              style={{
                height: "16px",
              }}
            />
          }
          description={
            <Skeleton.Button
              active
              style={{
                width: "180px",
                marginTop: "8px",
                height: "16px",
              }}
            />
          }
        ></List.Item.Meta>
      </List.Item>
    );
}

export default MarketSeoSkeleton