import React from 'react'
import '../css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export const sidebarData = [
    {
        title: 'Dashboard',
        icon: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
        link: '/dashboard'
    },
    {
        title: 'Accounts',
        icon: <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>,
        link: '/Accounts'
    },
    {
        title: 'Deposit',
        icon: <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>,
        link: '/Deposit'
    },
    {
        title: 'Withdraw',
        icon: <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>,
        link: '/Withdraw'
    },
    {
        title: 'Send',
        icon: <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>,
        link: '/Send'
    },
]

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebar-list'>
                {sidebarData.map((val, index) => {
                return (
                    <li key={index} className='sidebar-list-row' onClick={()=>{window.location.pathname = val.link}}>
                        <div>{val.icon}</div>
                        <div>{val.title}</div>
                    </li>
                )
            })}
           </ul>
        </div>
    )
}

export default Sidebar
