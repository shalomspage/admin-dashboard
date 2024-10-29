import { Space } from "antd"
import './App.css';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from "./Components/PageContent";


function App() {
  return <div className='App'>
    <Space className="sideBar">
    <SideMenu></SideMenu>
    </Space>
 
    <div>
    <AppHeader />
    <PageContent></PageContent>
   
    </div>
  
         
        
    
    
  </div>;
}

export default App;
