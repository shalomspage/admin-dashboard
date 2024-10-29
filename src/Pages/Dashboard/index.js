import { Card, Space, Statistic, Typography, Row, Col } from "antd"
import Notifcations from "../../Components/Dashboard/notications"
import Activities from "../../Components/Dashboard/activites"
import Contacts from "../../Components/Dashboard/contacts"

function Dashboard() {
    return (
        <div style={{padding:'20px' }}>

            <Row>
                
                <Col
                   xs={24}
                   sm={24}
                   xl={20}
                   style={{
                    height: '460px'
                   }}> 
                <Row>
                <Col xs={24} sm={24} xl={6} style={{  padding: '20px'}}>
                u
                </Col>
                <Col xs={24} sm={24} xl={6}  style={{  padding: '20px'}}>
                u
                </Col>
                <Col xs={24} sm={24} xl={6} style={{  padding: '20px'}}>
                u
                </Col>
                <Col xs={24} sm={24} xl={6} style={{  padding: '20px'}}>
                u
                </Col>
                </Row>
               
                <Row>
                <Col xs={24} sm={24} xl={18} style={{ padding: '20px'}}>
                Total Users
                </Col>
                <Col xs={24} sm={24} xl={6}  style={{ padding: '20px'}}>
                Traffic by website
                </Col>
                </Row>
                <Row>
                <Col xs={24} sm={24} xl={12} style={{ padding: '20px'}}>
                Reports Generated
                </Col>
                <Col xs={24} sm={24} xl={12}  style={{ padding: '20px'}}>
                Traffic by Location
                </Col>
                </Row>
                <Row>
                <Col xs={24} sm={24} xl={24} style={{ padding: '20px'}}>
                Marketing & SEO
                </Col>
            
                </Row>
                   </Col>
                       <Col
                   xs={24}
                   sm={24}
                   xl={4}
                   style={{
                   }}> <Notifcations />
                   <Activities />
                   <Contacts />
                   </Col>
            </Row>
          

            </div>
       
        
    )
}




export default Dashboard