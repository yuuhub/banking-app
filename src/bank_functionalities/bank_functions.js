/* check if localStorage works well */

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
/**
 * Function that obtains the last key used by the localStorage
 * used for creating object's keys.
 */
function get_last_key(){
    //console.log(localStorage._keys.length);
    return localStorage._keys.length;
}

/**
 * Required functionalities
 * Here are the required functions:
    create_user(user, balance)
    function creates new user in the system
    New user has zero balance (or an optional initial balance)
    user (argument) is any string value
    deposit(user, amount)
    increases user's balance by amount value
    returns new_balance of the user
    withdraw(user, amount)
    decreases user's balance by amount value
    returns new_balance of the user
    send(from_user, to_user, amount)
    decreases from_user's balance by amount value
    increases to_user's balance in amount value
    returns balance of from_user and to_user in given format
    get_balance(user)
    returns balance of the user in given format (₱xx,xxx.xx or Phpxx,xxx.xx)
    list_users()
    returns all users
 */

/**
 * takes in username and balance from the react component, 
 * and passes it to the provided localStorage.
 * 
 */
function create_user(user, balance = 0){
    let user_info = {
        'name': user, 
        'balance': balance
    }
    if(get_last_key() === 0){
        localStorage.setItem(1, JSON.stringify(user_info));
    } else {
        localStorage.setItem(get_last_key()+1, JSON.stringify(user_info));
    }
}
/**
 * 
 */
function deposit(user, amount = 0){
    let last_key = get_last_key();
    let successful = false;
    for(var i = 0; i < last_key; i++){
        let user_object = JSON.parse(window.localStorage.getItem(i));
        if (user_object.name === user){
            user_object.balance = amount;
            break;
        }
    }

}