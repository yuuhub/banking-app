
/**
 * Function that returns the current date. 
 *
 */
export function getCurrentDate() {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month<10?`0${month}`:`${month}`}-${date<10?`0${date}`:`${date}`}-${year}`   
}


/**
 * Function that creates account number. 
 *
 */
// export function accountNoGenerator() {
//     let newDate = new Date()
//     let year = newDate.getFullYear();
//     let counter = 0;
//     for(let i = 0; i < localStorage.length; i++) {
//         counter++;
//     }
//     return `${year}-00${counter}`  
// }
// export function list_users(userData){
