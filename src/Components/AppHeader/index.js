import { BellOutlined, HistoryOutlined, SunOutlined, HeartOutlined } from "@ant-design/icons";
import { Typography, Space, Badge, Button } from "antd";

function AppHeader() {
    return <div className="AppHeader">
        <Typography.Title style={{fontSize: 22, lineHeight: 28.6, fontWeight: 500}}> Dashboard</Typography.Title>
        <Space>
            <SunOutlined style={{ fontSize: 20, padding: 4 }} />
            <HistoryOutlined  style={{ fontSize: 20 , padding: 4 }}/>
            <Badge count={ 20 }>
            <BellOutlined style={{ fontSize: 20, padding: 4 }} />
            </Badge>
        </Space>
    </div>
}

export default AppHeader