import { Routes, Route } from "react-router-dom"
import Dashboard from "../../Pages/Dashboard"
import Request from "../../Pages/Request"
import Reports from "../../Pages/Reports"
import Tasks from "../../Pages/Tasks"
import AuditTrail from "../../Pages/AuditTrail"
import Customers from "../../Pages/Customers"
import Users from "../../Pages/Users" 
import Settings from "../../Pages/Settings"
import Administration from "../../Pages/Administration"
import Kyc from "../../Pages/Kyc"

function AppRoutes() {
    return (
   
          <Routes>
            <Route  path="/" element={<Dashboard />}/>
            <Route  path="/request" element={<Request />}/>
            <Route  path="/kyc" element={<Kyc />}/>
            <Route  path="/report" element={<Reports />}/>
            <Route  path="/tasks" element={<Tasks />}/>
            <Route  path="/audit-trail" element={<AuditTrail />}/>
            <Route  path="/customers" element={<Customers />}/>
            <Route  path="/users" element={<Users />}/>
            <Route  path="/settings" element={<Settings />}/>
            <Route  path="/administration" element={<Administration />}/>
          </Routes>
     
    )
}

export default AppRoutes