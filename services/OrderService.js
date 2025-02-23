import { BASE_URL, myAxios } from "./helper";

class OrderService{


    generateReport(orderDetails){
        let token = localStorage.getItem('token')
        console.log(token);
        return myAxios.post(BASE_URL+"/bill/generateReport",orderDetails,{headers:{"Authorization":`Bearer ${token}`}});
    }
}

export default new OrderService();