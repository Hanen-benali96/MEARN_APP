import React from 'react'
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { NavLink,Link } from 'react-router-dom';

function Sidebar () {
  return (
    <div className='sidebar'>
      <div className="avatar">
      <NavLink to="/Profile"> <img alt="ben-ali_Hanen" src='/uploads/hanen.jpeg'  className="avatar"/></NavLink>
       <div className="name"><span className="name">Hanen benali</span> 
       <i className="fas fa-angle-down"></i>
       </div>
                            
                           
                  
                                     
     </div>
      <hr/>
      <div className='center'>
      <ul>
        <p className='titles'>MAIN</p>
        <li>
          <DashboardIcon className='icon'/>
          <span>Dashboard</span>
        </li>
        <p className='titles'>LISTS</p>
        <li>
          <PersonOutlineOutlinedIcon className='icon'/>
          <span>Users</span>
        </li>
         <li>
     <StoreIcon className='icon'/>
      <span>Product</span>
        </li>
        <li>
          <CreditCardOutlinedIcon className='icon'/>
          <span>Orders</span>
        </li>
        
        <li>
         <LocalShippingIcon className='icon'/>
          <span>Livraison</span>
        </li>
        <li>
          <NotificationsNoneSharpIcon className='icon'/>
          <span>Notifications</span>
        </li>
        <li>
        <p className='titles'>SERVERS</p>
          <SettingsSystemDaydreamOutlinedIcon className='icon'/>
          <span>System Heath</span>
        </li>
        <li>
          <SettingsIcon className='icon'/>
          <span>Settings</span>
        </li>
      </ul>

      </div>
     
    </div>
);

    }
export default  Sidebar