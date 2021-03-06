import { get_current_date } from "./utils";
import { numberWithCommas } from "./utils";

// /**
//  * Function that handles the creation of users and passing it 
//  * to the localStorage.
//  * @param {javascript object from the submitted form data} user 
//  */

// export function create_user(user){
//     localStorage.setItem(get_last_key_from_localstorage(), JSON.stringify(user)); 
// }

export function list_users(userData){
    for (let key in localStorage){
        let user_rec = JSON.parse(localStorage.getItem(key));
        if(user_rec !== null && key.includes('user')){
            let user = {
                accountNumber: user_rec['accountNo'],
                name: user_rec['name'],
                balance: user_rec['balance'],
                dateCreated: get_current_date(),
            }
            userData.push(user);
        }
    }    
    return userData;
}

export function list_transactions(){
    const transactionData = [];

    for (let key in localStorage){
        let transaction_rec = JSON.parse(localStorage.getItem(key));
        if(transaction_rec !== null && key.includes('history')){
            let user = {
                accountNo: transaction_rec['accountNo'],
                name: transaction_rec['name'],
                amount: transaction_rec['amount'],
                date: transaction_rec['date'],
                refNo: transaction_rec['refNo'],
                transactionType: transaction_rec['transactionType']
            }
            transactionData.push(user);
        }
    }   
    return transactionData;
}

export function calculateAccounts () {
    let numberOfAccounts = 0;

    for (let key in localStorage) {
        if(key.includes('user')) {
            numberOfAccounts++;
        }
    }

    return numberOfAccounts;
}

export function calculateDeposits () {
    let totalDeposits = 0;

    for (let key in localStorage) {
        let transaction_rec = JSON.parse(localStorage.getItem(key));
        if (key.includes('history') && transaction_rec['transactionType'] === 'deposit') {
            totalDeposits += transaction_rec['amount'];
        }
    }

    return totalDeposits;
}

export function calculateWithdrawals () {
    let totalWithdrawal = 0;

    for (let key in localStorage) {
        let transaction_rec = JSON.parse(localStorage.getItem(key));
        if (key.includes('history') && transaction_rec['transactionType'] === 'withdrawal') {
            totalWithdrawal += transaction_rec['amount'];
        }
    }
    
    return totalWithdrawal;
}

export function search_name(accountNo_to_search){
    let key_of_name = null;

    for(let key in localStorage){
        //read the content from localStorage
        let user_rec = JSON.parse(localStorage.getItem(key));
        if (user_rec !== null) {
            //check if accountNo_to_search is the same 
            if(accountNo_to_search === user_rec['accountNo'] && key.includes('user')) {
                key_of_name = key;
            }
        }
    }

    return key_of_name; //null or key of the username to look at
}

export function deposit(account_to_search, amount){
    const search_key = search_name(account_to_search);
    const { accountNo, name, balance } = JSON.parse(localStorage.getItem(search_key));
    
    const curr_bal = parseFloat(balance);
    const curr_amt = parseFloat(amount);
    const new_bal = curr_amt + curr_bal;
    const transactionType = "deposit";

    const user_info = {
        accountNo: accountNo,
        name: name,
        balance: new_bal
    }

    const history_info = {
        refNo: Math.floor(100000 + Math.random() * 900000),
        accountNo: accountNo,
        name: name,
        amount: curr_amt,
        transactionType: transactionType,
        date: get_current_date()
    }
   
    localStorage.setItem(search_key, JSON.stringify(user_info));
    localStorage.setItem(`history${localStorage.length + 1}`, JSON.stringify(history_info));

}

export function withdraw(account_to_search, amount){
    const search_key = search_name(account_to_search);

    // object destructuring
    const { accountNo, name, balance } = JSON.parse(localStorage.getItem(search_key));
    
    const curr_bal = parseFloat(balance);
    const curr_amt = parseFloat(amount);
    const new_bal = curr_bal - curr_amt;

    if(curr_amt > curr_bal) {
        alert('not enough balance');
        return 
    }
    
    const transactionType = "withdrawal";

    if(curr_amt > curr_bal) {
        alert ('Insufficient balance');
    }
    else {
        const user_info = {
            accountNo: accountNo,
            name: name,
            balance: new_bal,
        }

        const history_info = {
            refNo: Math.floor(100000 + Math.random() * 900000),
            accountNo: accountNo,
            name: name,
            amount: curr_amt,
            transactionType: transactionType,
            date: get_current_date()
        }
    
        localStorage.setItem(search_key, JSON.stringify(user_info));
        localStorage.setItem(`history${localStorage.length + 1}`, JSON.stringify(history_info));
    }
}

export function send(sender, recipient, amount){
    const senderRecord = JSON.parse(localStorage.getItem(sender));
    const recipientRecord = JSON.parse(localStorage.getItem(recipient));

    const senderNewBalance = parseFloat(senderRecord['balance']) - parseFloat(amount);
    const recipientNewBalance = parseFloat(recipientRecord['balance']) + parseFloat(amount);

    const transactionType = 'transfer';

    if(senderNewBalance < 0) {
        alert ('Insufficient balance');
    }
    else {
        const sender_info = {
            ...senderRecord,
            balance: senderNewBalance
        }

        const recipient_info = {
            ...recipientRecord,
            balance: recipientNewBalance
        }

        const transaction_info = {
            refNo: Math.floor(100000 + Math.random() * 900000),
            accountNo: senderRecord['accountNo'],
            name: senderRecord['name'],
            amount: amount,
            date: get_current_date(),
            transactionType: transactionType
        }

        localStorage.setItem(sender, JSON.stringify(sender_info));
        localStorage.setItem(recipient, JSON.stringify(recipient_info));
        localStorage.setItem(`history${localStorage.length + 1}`, JSON.stringify(transaction_info));
    }
}
