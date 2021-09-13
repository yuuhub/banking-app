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
        if(user_rec !== null){
            let user = {
<<<<<<< HEAD
                accountNumber: `00${key}`,
=======
                accountNumber: user_rec['accountNo'],
>>>>>>> 3091007113497ef86e1c2942db9d73cdbad8a358
                name: user_rec['name'],
                balance: user_rec['balance'],
                dateCreated: get_current_date(),
            }
            userData.push(user);
        }
    }    
    console.log(userData)
    return userData;
}


export function search_name(name_to_search){
    let key_of_name = null;

    for(let key in localStorage){
        //read the content from localStorage
        let user_rec = JSON.parse(localStorage.getItem(key));
        if (user_rec !== null) {
            //check if name_to_search is the same 
            if(name_to_search === user_rec['name'] && key.includes('user')) {
                key_of_name = key;
            }
        }
    }

    return key_of_name; //null or key of the username to look at
}

export function deposit(name_to_search, amount){
    const search_key = search_name(name_to_search);
    const { name, balance } = JSON.parse(localStorage.getItem(search_key));
    
    const curr_bal = parseFloat(balance);
    const curr_amt = parseFloat(amount);
    const new_bal = curr_amt + curr_bal;
    const transactionType = "deposit";

    const user_info = {
        name: name,
        balance: new_bal.toString(),
    }

    const history_info = {
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


export function withdraw(name_to_search, amount){
    const search_key = search_name(name_to_search);

    // object destructuring
    const { name, balance } = JSON.parse(localStorage.getItem(search_key));
    
    const curr_bal = parseFloat(balance);
    const curr_amt = parseFloat(amount);
    const new_bal = curr_bal + curr_amt;
    const transactionType = "withrawal";

    const user_info = {
        name: name,
        balance: new_bal.toString(),
    }

    const history_info = {
        name: name,
        amount: curr_amt,
        transactionType: transactionType,
        date: get_current_date()
    }
   
    localStorage.setItem(search_key, JSON.stringify(user_info));
    localStorage.setItem(`history${localStorage.length + 1}`, JSON.stringify(history_info));

}



export function send(sender, recipient, amount){
    let { nameSender, balanceSender } = JSON.parse(localStorage.getItem(sender));
    let { nameRecipient, balanceRecipient } = JSON.parse(localStorage.getItem(recipient));

    balanceSender -= amount;
    balanceRecipient += amount;

}
