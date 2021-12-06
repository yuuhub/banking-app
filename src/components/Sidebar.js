import React from 'react'
import '../css/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faMoneyCheckAlt} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

export const sidebarMenu = [
    {
        title: 'Dashboard',
        icon: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
        link: '/Dashboard'
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
        <div className= 'grid-parent'>
            <div className='sidebar'>
                <h2>BankU</h2>
                <ul className='sidebar-list'>
                    {sidebarMenu.map((menu, index) => {
                    return (
                        <li key={index} className='sidebar-list-row' onClick={()=>{window.location.pathname = menu.link}}>
                            <div id='icon'>{menu.icon} </div>
                            <div id='title'>{menu.title}</div>
                        </li>
                    )
                })}
            </ul>
            <button id='load-data-btn'>Load Data</button>
            </div>
        </div>
    )
}

export default Sidebar
