import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios.post("/user/signup",user)
    .then((response) => response.data);
};


// export const loginUser=(loginDetail)=>{
//     return myAxios.post('/user/login',loginDetail)
//     .then((response) => response.data);
// };