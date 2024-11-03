import { Card, List, Typography } from "antd"
import { useState } from "react"
import ActivitiesSkelenton from "../skeleton/activites"
import id from "../assets/brivel.jpg";

function Activities() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div
        style={{
          height: "100%",
          minWidth: "264px",
          backgroundColor: "#fff8f8",
          borderRadius: "0px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
          alignItems: "flex-start",
          // width: "250px",
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
        {/* {isLoading ? (
            <List
              itemLayout="horizontal"
              dataSource={Array.from({ length: 4 }).map((_, index) => ({
                id: index,
              }))}
              renderItem={() => <ActivitiesSkelenton />}
            />
          ) : (
            <List></List>
          )} */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <p className="text-p1">Activities</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={id}
            alt="id"
            style={{ width: "40px", height: "40px", borderRadius: "30px" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "start",
            }}
          >
            <p className="text-p1">Changed the Style.</p>
            <p className="text-p2">Just now</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={id}
            alt="id"
            style={{ width: "40px", height: "40px", borderRadius: "30px" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "start",
            }}
          >
            <p className="text-p1">Released a mew verdion.</p>
            <p className="text-p2">15 minutes ago</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={id}
            alt="id"
            style={{ width: "40px", height: "40px", borderRadius: "30px" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "start",
            }}
          >
            <p className="text-p1">Submitted a bug.</p>
            <p className="text-p2">12 hours ago</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={id}
            alt="id"
            style={{ width: "40px", height: "40px", borderRadius: "30px" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "start",
            }}
          >
            <p className="text-p1">Modified A data in Page X.</p>
            <p className="text-p2">Today, 11:59 AM</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img
            src={id}
            alt="id"
            style={{ width: "40px", height: "40px", borderRadius: "30px" }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              alignItems: "start",
            }}
          >
            <p className="text-p1">Deleted a page in Project...</p>
            <p className="text-p2">Feb 2, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities
