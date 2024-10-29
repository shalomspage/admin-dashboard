import { Badge, List, Typography, Skeleton } from "antd"

function ActivitiesSkelenton() {
    return (
        <List.Item>
           <List.Item.Meta 
           avatar={<Badge color="transparent"/>}
           title={
            <Skeleton.Button 
              active
              style={{
                height: "14px"
              }}
            />
           }
           description={
            <Skeleton.Button 
            active
            style={{
                width: "260px",
                marginTop: "8px",
                height: "16px"
            }}
            />
           }
           >
            </List.Item.Meta>
        </List.Item>
    )
}

export default ActivitiesSkelenton