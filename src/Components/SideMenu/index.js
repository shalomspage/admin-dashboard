import { AppstoreOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/logoipsum-222.svg";

import {
  request,
  kyc,
  reports,
  task,
  audit,
  customers,
  users,
  settings,
  administration,
  ByeWind,
} from "../icons";

function SideMenu() {
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <div style={{ paddingTop: "35px", paddingBottom: "30px" }}>
        <img src={logo} alt="logo" style={{ width: "186", height: "auto" }} />
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
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="side-nav">
          <Space>
            <AppstoreOutlined />
            <a href="./">
              <Typography.Text
                style={{
                  fontSize: "14px",
                  lineHeight: "18.9px",
                  fontWeight: "400",
                  color: "#292D32",
                }}
              >
                Dashboard
              </Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={request} />
            <a href="./">
              <Typography.Text className="typoText">Requests</Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={kyc} />
            <a href="./">
              <Typography.Text className="typoText">KYC</Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={reports} />
            <a href="./reports">
              <Typography.Text className="typoText">Reports</Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={task} />
            <a href="./">
              <Typography.Text className="typoText">Tasks</Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={audit} />
            <a href="./">
              <Typography.Text className="typoText">
                Audit Trail
              </Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={customers} />
            <a href="./">
              <Typography.Text className="typoText">Customers</Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={users} />
            <a href="./">
              <Typography.Text className="typoText">Users</Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={settings} />
            <a href="./">
              <Typography.Text className="typoText">Settings</Typography.Text>
            </a>
          </Space>
        </div>
        <div className="side-nav">
          <Space>
            <img src={administration} />
            <a href="./">
              <Typography.Text className="typoText">
                Administration
              </Typography.Text>
            </a>
          </Space>
        </div>
      </div>
      <div style={{ paddingTop: "200px", paddingLeft: "20px" }}>
        <Space>
          <img src={ByeWind} />
          <a href="./">
            <Typography.Text className="typoText">ByeWind</Typography.Text>
          </a>
        </Space>
      </div>
    </div>
  );
}

export default SideMenu;
