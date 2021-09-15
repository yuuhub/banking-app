import React from 'react'
import { list_transactions } from '../bank_functionalities/bank_functions'
import '../css/usertable.css'

const Dashboard = () => {
    const transactions = list_transactions();

    return (
        <div>
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
