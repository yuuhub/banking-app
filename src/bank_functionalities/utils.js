
/**
 * Function that returns the current date. 
 *
 */
export function get_current_date() {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month<10?`0${month}`:`${month}`}-${date<10?`0${date}`:`${date}`}-${year}`   
}

/**
 * Function that obtains the last key used by the localStorage
 * used for creating object's keys.
 */
 export function get_last_key_from_localstorage() {
    //console.log(localStorage._keys.length);
    return localStorage.length + 1;
}

//Function that returns a currency value string with commas
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}