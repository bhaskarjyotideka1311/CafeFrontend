import { BASE_URL, myAxios } from "./helper";

class CategoryService {




    addNewCategory(category){
        let token = localStorage.getItem('token')
        console.log(token);
        return myAxios.post(BASE_URL+"/category/add",category,{headers:{"Authorization":`Bearer ${token}`}});
        
    }

    getAllCategory(){
        let token = localStorage.getItem('token')
        console.log(token);
        return myAxios.get(BASE_URL+"/category/get",{headers:{"Authorization":`Bearer ${token}`}});
    }

    updateCategory(category){
        return myAxios.post(BASE_URL+"/category/update",category);
    }

}

export default new CategoryService();