import { Card, Space, Statistic, Typography, Row, Col } from "antd"
import Notifcations from "../../Components/Dashboard/notications"
import Contacts from "../../Components/Dashboard/contacts";
import CardRequest from "../../Components/Dashboard/card-request";
import CardKyc from "../../Components/Dashboard/kyc-card";
import CardTask from "../../Components/Dashboard/card-task";
import CardCustomer from "../../Components/Dashboard/card-customer";
import RequestGenerated from "../../Components/Dashboard/request-generated";
import TrafficWebsite from "../../Components/Dashboard/traffic-website";
import ReportsGenerated from "../../Components/Dashboard/reports-generated";
import TrafficLocation from "../../Components/Dashboard/traffic-location";
import MarketSeo from "../../Components/Dashboard/market-seo";
import Activities from "../../Components/Dashboard/activites";
import BarchartReports from "../../Components/Graph/barchartReports";
import TotalUsers from "../../Components/Dashboard/total-users";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <Row>
        <Col
          xs={24}
          sm={24}
          xl={20}
          style={{
            height: "460px",
          }}
        >
          <Row>
            <Col xs={24} sm={24} xl={6} style={{ padding: "10px" }}>
              <CardRequest />
            </Col>
            <Col xs={24} sm={24} xl={6} style={{ padding: "10px" }}>
              <CardKyc />
            </Col>
            <Col xs={24} sm={24} xl={6} style={{ padding: "10px" }}>
              <CardTask />
            </Col>
            <Col xs={24} sm={24} xl={6} style={{ padding: "10px" }}>
              <CardCustomer />
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={24} xl={18} style={{ padding: "20px" }}>
              <TotalUsers />
            </Col>
            <Col xs={24} sm={24} xl={6} style={{ padding: "20px" }}>
              <TrafficWebsite />
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} xl={12} style={{ padding: "20px" }}>
              <ReportsGenerated />
            </Col>
            <Col xs={24} sm={24} xl={12} style={{ padding: "20px" }}>
              <TrafficLocation />
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} xl={24} style={{ padding: "20px" }}>
              <MarketSeo />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} xl={4} style={{}}>
          <Notifcations />
          <Activities />
          <Contacts />
        </Col>
      </Row>
    </div>
  );
}




export default Dashboard