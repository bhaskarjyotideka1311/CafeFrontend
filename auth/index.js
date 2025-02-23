
export const isLoggedIn = () => {
    let data = localStorage.getItem("data");
    if(data != null) return false;
    else return true;
};


// export const doLogin = (data,next) => {
//     localStorage.setItem("data", JSON.stringify(data));
//     next()
// };