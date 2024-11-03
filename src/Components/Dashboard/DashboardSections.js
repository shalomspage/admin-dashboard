import CardRequest from "../../Components/Dashboard/card-request";
import CardKyc from "../../Components/Dashboard/kyc-card";
import CardTask from "../../Components/Dashboard/card-task";
import CardCustomer from "../../Components/Dashboard/card-customer";

const DashboardSections = () => {
  return (
    <Row>
      <Col xs={24} sm={24} xl={6} style={{ padding: "20px" }}>
        <CardRequest />
      </Col>
      <Col xs={24} sm={24} xl={6} style={{ padding: "20px" }}>
        <CardKyc />
      </Col>
      <Col xs={24} sm={24} xl={6} style={{ padding: "20px" }}>
        <CardTask />
      </Col>
      <Col xs={24} sm={24} xl={6} style={{ padding: "20px" }}>
        <CardCustomer />
      </Col>
    </Row>
  );
};

export default DashboardSections;
