import { AppstoreOutlined, SettingOutlined, UserOutlined, BarsOutlined, HourglassOutlined } from "@ant-design/icons" 
import { Button, Menu, Space, Typography } from "antd"
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoipsum-222.svg";


function SideMenu() {
    const navigate = useNavigate();
    return (
    <div className="SideMenu">
        <div style={{paddingTop: '35px', paddingBottom: '30px'}}>
        <img src={ logo } alt="logo" style={{ width: '186', height: 'auto'}}/>

        </div>
        {/* <Menu onClick={(item) => {
            //item.key
            navigate(item.key);
        }}
        items={[
            {
                label: "Dashboard",
                icon: <AppstoreOutlined /> ,
                key: "/"
            },
            {
                label: "Request",
                icon: <HourglassOutlined /> ,
                key: "/request"
            },
            {
                label: "KYC",
                icon: <AppstoreOutlined /> ,
                key: "/kyc"
            },
            {
                label: "Report",
                icon: <AppstoreOutlined /> ,
                key: "/report"
            },
            {
                label: "Tasks",
                icon: <BarsOutlined /> ,
                key: "/tasks"
            },
            {
                label: "Audit Trail",
                icon: <AppstoreOutlined /> ,
                key: "/audit-trail"
            },
            {
                label: "Customers",
                icon: <UserOutlined /> ,
                key: "/customers"
            },
            {
                label: "Users",
                icon: <AppstoreOutlined /> ,
                key: "/users"
            },
            {
                label: "Settings",
                icon: <SettingOutlined /> ,
                key: "/settings"
            },
            {
                label: "Administration",
                icon: <AppstoreOutlined /> ,
                key: "/administration"
            },
           
        ]}
        
        >
       
        </Menu> */}
        <div style={{display:'flex', flexDirection: 'column', gap: '16px'}}>
        <div className="side-nav">
            <Space>
                <AppstoreOutlined />
                <a href="./">
                <Typography.Text style={{fontSize: '14px', lineHeight: '18.9px', fontWeight: '400', color: '#292D32'}}>Dashboard</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">Requests</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">KYC</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./reports">
                <Typography.Text className="typoText">Reports</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">Tasks</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">Audit Trail</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">Customers</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">Users</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">Settings</Typography.Text>
                </a>
            </Space>
        </div>
        <div  className="side-nav">
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">Administration</Typography.Text>
                </a>
            </Space>
        </div>
        </div>
        <div style={{ paddingTop: '200px', paddingLeft: '20px' }}>
            <Space>
                <UserOutlined className="i-con" />
                <a href="./">
                <Typography.Text className="typoText">ByeWind</Typography.Text>
                </a>
            </Space>
        </div>
    </div>
    );
}
  
export default SideMenu