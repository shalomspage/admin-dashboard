import { Card, List, Typography } from "antd"
import { useState } from "react"
import NotificationSkelenton from "../skeleton/notification";

function Notifcations() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div >
            <Card
            style={{ 
              height: '100%', 
              backgroundColor: '#fff8f8', 
              borderBottomLeftRadius: '0px', 
              borderBottomRightRadius: '0px'}}
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
                   >Notifcations</Typography.Text>
                </div>
            }
            > 
          {isLoading ? (
            <List
            itemLayout="horizontal"
            dataSource={Array.from({ length: 4 }).map((_, index) => ({
                id: index,
            }))}
            renderItem={() => <NotificationSkelenton />}
            />
          ) : (
            <List>

            </List>
          )}
            </Card>

        </div>
    )
}

export default Notifcations