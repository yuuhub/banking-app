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
    //console.log(user);
    localStorage.setItem(get_last_key_from_localstorage(), JSON.stringify(user)); 
}

/**
 * Function that returns the data from localStorage as
 * a list.
 * @param {*} userData 
 */
export function list_users(userData){
    for (var key in localStorage){
        let user_rec = JSON.parse(localStorage.getItem(key));
        if(user_rec !== null){
            let user = {
                id: key,
                username: user_rec['username'],
                balance: user_rec['balance'],
                accountType: user_rec['accountType'],
            }
            userData.push(user);

        }


    }
    
    return userData;
}


export function search_username(username_to_search){
    let key_of_username = null;
    for(var key in localStorage){
        //read the content from localStorage
        let user_rec = JSON.parse(localStorage.getItem(key));
        if (user_rec !== null){
            //check if username_to_search is the same 
            if(username_to_search === user_rec['username']){
                key_of_username = key;
            }
        }

    }

    return key_of_username; //null or key of the username to look at

}

export function deposit(username_to_search, amount){
    let search_key = search_username(username_to_search);

    // object destructuring
    let {accountType, username, balance} = JSON.parse(localStorage.getItem(search_key));
    
    let curr_bal = parseFloat(balance);
    let curr_amt = parseFloat(amount);
    let new_bal = curr_amt + curr_bal;

    let user_info = {
        accountType: accountType,
        username: username,
        balance: new_bal.toString(),
    }

    localStorage.setItem(search_key, JSON.stringify(user_info));

}

export function balance(username_to_search){
    let search_key = search_username(username_to_search);

    // object destructuring
    let {accountType, username, balance} = JSON.parse(localStorage.getItem(search_key));
    
    let curr_bal = parseFloat(balance);

    return curr_bal;
}


export function withdraw(username_to_search, amount){
    let search_key = search_username(username_to_search);

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