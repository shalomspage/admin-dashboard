import { Badge, List, Typography, Skeleton } from "antd"

function CardKycSkeleton() {
    return (
      <List.Item>
        <List.Item.Meta
          avatar={<Badge color="transparent" />}
          title={
            <Skeleton.Button
              active
              style={{
                height: "14px",
              }}
            />
          }
          description={
            <Skeleton.Button
              active
              style={{
                width: "150px",
                marginTop: "8px",
                height: "66px",
              }}
            />
          }
        ></List.Item.Meta>
      </List.Item>
    );
}

export default CardKycSkeleton