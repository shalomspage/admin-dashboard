import { Card, List, Typography } from "antd"
import { useState } from "react"
import ContactSkeloton from "../skeleton/notification";

function Contacts() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div>
            <Card
            style={{ 
              height: '100%', 
              backgroundColor: '#fff8f8', 
              borderTopLeftRadius: '0px', 
              borderTopRightRadius: '0px'}}
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
                   >Contacts</Typography.Text>
                </div>
            }
            > 
          {isLoading ? (
            <List
            itemLayout="horizontal"
            dataSource={Array.from({ length: 6 }).map((_, index) => ({
                id: index,
            }))}
            renderItem={() => <ContactSkeloton />}
            />
          ) : (
            <List>

            </List>
          )}
            </Card>

        </div>
    )
}

export default Contacts