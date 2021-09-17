import React from 'react'
import { calculateAccounts, calculateDeposits, calculateWithdrawals, list_transactions } from '../bank_functionalities/bank_functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import '../css/usertable.css'
import '../css/dashboard.css'
import { numberWithCommas } from '../bank_functionalities/utils'
import img from '../components/img/4565.png'

const Dashboard = () => {
    const transactions = list_transactions();
    const numberOfAccounts = calculateAccounts();
    const totalDeposits = calculateDeposits();
    const totalWithdrawals = calculateWithdrawals();

    return (
        <div>
            <h1>Dashboard</h1>
            <div className='welcome-container'>
                <div className='title-container'>
                    <h1>Welcome to the Dashboard</h1>
                    <p>Here you can see some useful statistics about your accounts and recent transactions.</p>
                </div>
                <img src={img} alt='illustration' />
            </div>

            <h1>History</h1>
            <div class='stats-container'>
                <div className='stats-card'>
                    <div className='title'>
                        <span>Total Accounts</span>
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    </div>
                    <span className='stat'>{numberOfAccounts}</span>
                </div>
                <div className='stats-card'>
                    <div className='title'>
                        <span>Total Deposits</span> 
                        <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>
                    </div>
                    <span className='stat'>&#8369;{numberWithCommas(totalDeposits)}</span>
                </div>
                <div className='stats-card'>
                    <div className='title'>
                        <span>Total Withdrawals</span>
                        <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                    </div>
                    <span className='stat'>&#8369;{numberWithCommas(totalWithdrawals)}</span>
                </div>
            </div>

            <h1>Recent Transactions</h1>
            <div className='usertable-wrapper'>
                <table className='usertable-container'>
                    <thead className='thead-container'>
                        <tr className='tr-container'>
                            <th id='refNo'> Ref No. </th>
                            <th id='transactionType'> Type </th>
                            <th id='accountNo'> Account No </th>
                            <th id='amount'> Amount </th>
                            <th id='date'> Date </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((item) =>
                                <tr>
                                    <td id='refNo-data'>{item.refNo}</td>
                                    <td id='type-date'>{item.transactionType.toUpperCase()}</td>
                                    <td id='account-data'>{item.accountNo}</td>
                                    <td id='amount-data'>{item.amount}</td>
                                    <td id='date-data'>{item.date}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
        </div>
    )
}

export default Dashboard
