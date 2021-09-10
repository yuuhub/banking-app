import { getCurrentDate } from "./utils";

/**
 * Function that obtains the last key used by the localStorage
 * used for creating object's keys.
 */
export function get_last_key_from_localstorage() {
    //console.log(localStorage._keys.length);
    return localStorage.length + 1;
}

/**
 * Function that handles the creation of users and passing it 
 * to the localStorage.
 * @param {javascript object from the submitted form data} user 
 */

export function create_user(user){
    localStorage.setItem(get_last_key_from_localstorage(), JSON.stringify(user)); 
}


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
                accountNumber: `${year}00${key}`,
                // firstname: user_rec['firstname'],
                // lastname: user_rec['lastname'],
                name: user_rec['name'],
                balance: user_rec['balance'],
                dateCreated: getCurrentDate(),
                // accountType: user_rec['accountType'],
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
        if (user_rec !== null){
            //check if name_to_search is the same 
            if(name_to_search === user_rec['name']){
                key_of_name = key;
            }
        }

    }

    return key_of_name; //null or key of the username to look at
}

export function deposit(name_to_search, amount){
    let search_key = search_name(name_to_search);

    // object destructuring
    let {transactionType, name, balance} = JSON.parse(localStorage.getItem(search_key));
    
    let curr_bal = parseFloat(balance);
    let curr_amt = parseFloat(amount);
    let new_bal = curr_amt + curr_bal;

    console.log(new_bal);

    let user_info = {
        name: name,
        transactionType: transactionType,
        // refNumber: refNumber,
        //date: date
        balance: new_bal.toString(),
    }
   
    localStorage.setItem(search_key, JSON.stringify(user_info));

}

export function balance(name_to_search){
    let search_key = search_name(name_to_search);

    // object destructuring
    let {accountType, name, balance} = JSON.parse(localStorage.getItem(search_key));
    
    let curr_bal = parseFloat(balance);

    return curr_bal;
}


export function withdraw(name_to_search, amount){
    let search_key = search_name(name_to_search);

    // object destructuring
    let {accountType, username, balance} = JSON.parse(localStorage.getItem(search_key));
    
    let curr_bal = parseFloat(balance);
    let curr_amt = parseFloat(amount);
    let new_bal = curr_amt - curr_bal;

    let user_info = {
        accountType: accountType,
        username: username,
        balance: new_bal.toString(),
    }

    localStorage.setItem(search_key, JSON.stringify(user_info));

}


/*
export function send(from_user, to_user, amount){
    let successful = false;
    let last_key = get_last_key_from_localstorage();


}
*/