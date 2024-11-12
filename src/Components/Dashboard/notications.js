import { Card, List, Typography } from "antd"
import { useState } from "react"
import NotificationSkelenton from "../skeleton/notification";
import { broadcast, bug, newuser } from "../icons";

function Notifcations() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "100%",
          backgroundColor: "#fff8f8",
          borderRadius: "0px",
          padding: "22px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          alignItems: "flex-start",
        }}
        headStyle={{ padding: "8px 16px" }}
        bodyStyle={{ padding: "0 1rem" }}
        title={
          <div
            style={{
              display: "flex",
              alignContent: "flex-start",
            }}
          >
            <Typography.Text size="sm" style={{ marginLeft: "0.2rem" }}>
              Activities
            </Typography.Text>
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
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <p className="text-p1">Notifications</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={bug}
                alt="bug"
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "30px",
                  backgroundColor: "#E3F5FF",
                  padding: "4px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                }}
              >
                <p className="text-p1">You fixed a bug.</p>
                <p className="text-p2">Just now</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={newuser}
                alt="new user"
                style={{ width: "24px", height: "24px", borderRadius: "30px" }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                }}
              >
                <p className="text-p1">New user registered.</p>
                <p className="text-p2">59 minutes ago</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                src={bug}
                alt="bug"
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "30px",
                  backgroundColor: "#E3F5FF",
                  padding: "4px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                }}
              >
                <p className="text-p1">You fixed a bug.</p>
                <p className="text-p2">12 hours ago</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px",
              }}
            >
              <img
                src={broadcast}
                alt="broad cast"
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "30px",
                  backgroundColor: "#E3F5FF",
                  padding: "4px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                }}
              >
                <p className="text-p1">Andi Lane subscried to y...</p>
                <p className="text-p2">Today, 11:59 AM</p>
              </div>
            </div>
          </List>
        )}
      </div>
    </div>
  );
}

export default Notifcations