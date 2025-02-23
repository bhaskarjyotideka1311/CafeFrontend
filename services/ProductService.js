import { BASE_URL, myAxios } from "./helper";

class ProductService {

    addNewProduct(product){

        let token = localStorage.getItem('token')
        console.log(token);
        return myAxios.post(BASE_URL+"/product/add",product,{headers:{"Authorization":`Bearer ${token}`}});
    }

    getAllProducts(){
        let token = localStorage.getItem('token')
        console.log(token);
        return myAxios.get(BASE_URL+"/product/get",{headers:{"Authorization":`Bearer ${token}`}})
    }

    getByCategory(id){
        let token = localStorage.getItem('token')
        console.log(token);
        return myAxios.get(BASE_URL+"/product/getByCategory/"+id,{headers:{"Authorization":`Bearer ${token}`}})
    }
}

export default new ProductService();