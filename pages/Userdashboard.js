import React, { useEffect, useState, useLayoutEffect} from 'react'
import CategoryManagement from './CategoryManagement';
import ProductManagement from './ProductManagement';
import ProductService from '../services/ProductService';
import UserBase from '../components/UserBase';
import OrderManagement from './OrderManagement';
import TryOrder from './TryOrder';
import ProductTry from './ProductTry';

const Userdashboard =()=>{


    // const [productList, setProductList] = useState([]);

    // useEffect(() => {
    //     ProductService.getAllProducts().then((res) => {
    //         console.log(res.data);
    //         setProductList(res.data)

    //     }).catch((error) => {
    //         console.log(error);
    //     });

    // },[]);
    let imagestyle = {
        height:"90vh",
        width:"100vw",
        backgroundImage:'url("https://img.freepik.com/premium-vector/set-various-delicious-foods_29937-8094.jpg?w=1380")',
        //backgroundImage:'url("https://img.freepik.com/free-vector/foods-beverages-set_1308-105966.jpg?w=1380&t=st=1683688593~exp=1683689193~hmac=2d5b32cc49c2206b84afb361db3fbe4a6714015843b18e30c10b6155cc1c2d45")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        
      }
      useLayoutEffect(() => {
        document.body.style.backgroundColor="#fff"
   });
    return(
        //<div>welcome</div>
        //<CategoryManagement />
        // <ProductManagement />
        <UserBase>
        <div class = "image" style={imagestyle}>
             <h1>Engineer's Cafe</h1>
             {/* <OrderManagement/> */}
             {/* <TryOrder /> */}
             {/* <ProductTry/> */}
            {/* <CategoryManagement/> */}
            {/* <ProductManagement/> */}

            {/* <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                All Product Details
                            </div>

                            <div className="card-body">
                                <table class="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">CategoryId</th>
                                      <th scope="col">Name</th>
                                      <th scope="col">Description</th>
                                      <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {productList.map((p, num) => (
                                    <tr>
                                        <td>{p.categoryId}</td>
                                        <td>{p.name}</td>
                                        <td>{p.description}</td>
                                        <td>{p.price}</td>
                                    </tr> ))}
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        </UserBase>
    );
};

export default Userdashboard;