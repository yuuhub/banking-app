import React from 'react'
import { calculateAccounts, calculateDeposits, calculateWithdrawals, list_transactions } from '../bank_functionalities/bank_functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import '../css/usertable.css'
import '../css/dashboard.css'

const Dashboard = () => {
    const transactions = list_transactions();
    const numberOfAccounts = calculateAccounts();
    const totalDeposits = calculateDeposits();
    const totalWithdrawals = calculateWithdrawals();

    return (
        <div>
            <h1>History</h1>
            <div class='stats-container'>
                <div className='stats'>Total Accounts
                    <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    <br /> 
                    {numberOfAccounts}
                </div>
                <div className='stats'>Total Deposits 
                    <FontAwesomeIcon icon={faMoneyCheckAlt}></FontAwesomeIcon>
                    <br /> 
                    {totalDeposits}
                </div>
                <div className='stats'>Total Withdrawals 
                    <FontAwesomeIcon icon={faMoneyBillWave}></FontAwesomeIcon>
                    <br /> 
                    {totalWithdrawals}
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
