import { get_current_date } from "./utils";

// /**
//  * Function that handles the creation of users and passing it 
//  * to the localStorage.
//  * @param {javascript object from the submitted form data} user 
//  */

// export function create_user(user){
//     localStorage.setItem(get_last_key_from_localstorage(), JSON.stringify(user)); 
// }


/**
 * Function that returns the data from localStorage as
 * a list.
 * @param {*} userData 
 */
export function list_users(userData){
    let newDate = new Date()
    let year = newDate.getFullYear();
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

export function list_transactions(userData){
    let newDate = new Date()
    let year = newDate.getFullYear();
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


export function search_name(name_to_search){
    let key_of_name = null;

    for(let key in localStorage){
        //read the content from localStorage
        let user_rec = JSON.parse(localStorage.getItem(key));
        if (user_rec !== null) {
            //check if name_to_search is the same 
            if(name_to_search === user_rec['accountNo'] && key.includes('user')) {
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

export function balance(name_to_search){
    let search_key = search_name(name_to_search);

    // object destructuring
    let {accountType, name, balance} = JSON.parse(localStorage.getItem(search_key));
    
    let curr_bal = parseFloat(balance);

    return curr_bal;
}


export function withdraw(account_to_search, amount){
    const search_key = search_name(account_to_search);

    // object destructuring
    const { accountNo, name, balance } = JSON.parse(localStorage.getItem(search_key));
    
    const curr_bal = parseFloat(balance);
    const curr_amt = parseFloat(amount);
    const new_bal = curr_bal - curr_amt;
    const transactionType = "withrawal";

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



export function send(sender, recipient, amount){
    const senderRecord = JSON.parse(localStorage.getItem(sender));
    const recipientRecord = JSON.parse(localStorage.getItem(recipient));

    const senderNewBalance = parseFloat(senderRecord['balance']) - parseFloat(amount);
    const recipientNewBalance = parseFloat(recipientRecord['balance']) + parseFloat(amount);

    const transactionType = 'Transfer';
    
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
        name: senderRecord['name'],
        amount: amount,
        date: get_current_date(),
        transactionType: transactionType
    }

    localStorage.setItem(sender, JSON.stringify(sender_info));
    localStorage.setItem(recipient, JSON.stringify(recipient_info));
    localStorage.setItem(`history${localStorage.length + 1}`, JSON.stringify(transaction_info));
}
