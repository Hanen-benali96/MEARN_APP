import './Widget.css'
import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function Widget({type}) {
  let data ;

  const amount = 100;
  const diff =20;
  switch(type){
    case "user":
    data = {
      title:"USERS",
      isMoney: false,
      link : "See all users",
      icon: <PersonOutlinedIcon className='icon'
       style={{color: "crimson",
        }} />,
    };
    break;
    case "order":
      data = {
        title:"ORDERS",
        isMoney: false,
        link : "view all orders",
        icon: < ShoppingCartOutlinedIcon className='icon' style={{color: "crimson",
      }} />,
        };
      break;
      case "earning":
        data = {
          title:"ERARNING",
          isMoney: true,
          link : "View net earnings",
          icon: <MonetizationOnOutlinedIcon className='icon'style={{color: "gold",
        }}/>,
        };
        break;
        case "balance":
        data = {
          title:"BALANCE",
          isMoney: true,
          link : "See Details",
          icon: < AccountBalanceWalletOutlinedIcon className='icon'style={{color: "crimson",
        }} />,
        };
        break;
        
  default:
      break
  }

  return (
    <div className='widget'>
      <div className='left'>
      <span className='ussers'>{data.title}</span>
      <span className='counter'> { data.isMoney && "$" } {amount} </span>
      <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
      <div className='percentage positive'>
        <KeyboardArrowUpIcon/>
       {diff}%
       </div>
       {data.icon}
</div>
    </div>
  )
}

export default Widget