import { Card, List, Typography } from "antd"
import { useState } from "react"
import TrafficWebsiteSkeleton from "../skeleton/trafficWebsite";

function TrafficWebsite() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <div
          style={{ 
            height: '100%', 
            backgroundColor: '#fff8f8', 
            borderRadius: '0px'}}
            headStyle={{padding: '8px 16px'}}
            bodyStyle={{ padding: '0 1rem'}}
            title={
                <div style={{
                    display: 'flex',
                    alignContent: 'flex-start'
                }}>
                   <Typography.Text
                   size='sm'
                   style={{ marginLeft: "0.2rem"}}
                   >Request</Typography.Text>
                </div>
            }
            > 
          {isLoading ? (
            <List
            itemLayout="horizontal"
            dataSource={Array.from({ length: 1 }).map((_, index) => ({
                id: index,
            }))}
            renderItem={() => <TrafficWebsiteSkeleton />}
            />
          ) : (
            <List>
            </List>
          )}
            </div>

        </div>
    )
}

export default TrafficWebsite