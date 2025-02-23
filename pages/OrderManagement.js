import React, { useState } from "react"
import OrderService from "../services/OrderService";
import UserBase from "../components/UserBase";

const OrderManagement = () => {

    // const [orderDetails,setOrderDetails] = useState({
    //     fileName:"",
    //     contactNumber:"",
    //     email:"",
    //     name:"",
    //     paymentMethod:"",
    //     // id:"",
    //     // name:"",
    //     // category:"",
    //     // quantity:"",
    //     // price:"",
    //     // total:"",
    //     productDetails:"",
    //     totalAmount:""
    //     //productDetails:"[{id:"", 
    //     //                   name:"", 
    //     //                   category:"", 
    //     //                   quantity:"", 
    //     //                   price:"", 
    //     //                   total:"",}]",
    //     // totalAmount:""

    // });

    // const [prodDetails, setProdDetails] = useState({
    //     id:"",
    //     name:"",
    //     category:"",
    //     quantity:"",
    //     price:"",
    //     total:"",
    //     totalAmount:""this.state.objectname
    // });

    const data = {"filename":this.state.fileName,
    "contactNumber":this.state.contactNumber,
    "email":this.state.email,
    "name":this.state.name,
    "paymentMethod":this.state.paymentMethod,
    "productDetails":"[{\"id\":3,\"name\":\"corn pizza\",\"category\":\"pizza\",\"quantity\":\"1\",\"price\":290,\"total\":290}]","totalAmount":"290"}

    const [fileName, setFileName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [productDetails, setProductDetails] = useState([
        {id:"",name:"",category:"",quantity:"",price:"",total:""}
    ]);
    const [totalAmount, setTotalAmount] = useState('');

    const handleFileNameChange = (event) => {
        setFileName(event.target.value);
    };
    const handleContactNumberChange = (event) => {
        setContactNumber(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const handleProductChange=(event)=>{
        const value=event.target.value;
        setProductDetails({...productDetails, [event.target.name]: value});
    };
    const handleTotalChange = (event) => {
        setTotalAmount(event.target.value);
    };

    // const handleInputChange=(e)=>{

    //     const value=e.target.value;
    //     setOrderDetails({...orderDetails, [e.target.name]: value});
       
    // };

    // const handleChange=(e)=>{

    //     const value=e.target.value;
    //     setProdDetails({...prodDetails, [e.target.name]: value});
       
    // };
    // const [productList, setProductList] = useState([]);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        //console.log(orderDetails);

        const orderData ={
            fileName:"",
            contactNumber:"",
            email:"",
            name:"",
            paymentMethod:"",
            //productDetails:[],
            productDetails:[{id:"/",
            name:"/",
            category:"/",
            quantity:"/",
            price:"/",
            total:"/"}],
            totalAmount:""

        };
        console.log(data);
        //console.log(orderData)
         OrderService.generateReport(data).then((res)=>{
        //OrderService.generateReport(orderData).then((res)=>{
          console.log(res.data);
        }).catch((error)=>{
          console.log(error);
          console.log("error occur");
    
        });
      };

    //   const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     console.log(prodDetails);
    
    //     OrderService.generateReport(prodDetails).then((res)=>{
    //       console.log(res.data);
    //     }).catch((error)=>{
    //       console.log(error);
    
    //     });
    //   };

      return(

        <UserBase>

        <div className="forms-container">
            <h1>Order Management</h1>
            <form onSubmit={(e)=>handleFormSubmit(e)}>
                <label>
                   File Name:
                   <input type="text" name="fileName" onChange={(e)=>handleFileNameChange(e)} />
                </label>
                <label>
                   Contact Number:
                   <input type="number" name="contactNumber" onChange={(e)=>handleContactNumberChange(e)} />
                </label>
                <label>
                   Email:
                   <input type="email" name="email" onChange={(e)=>handleEmailChange(e)} />
                </label>
                <label>
                   Name:
                   <input type="text" name="name" onChange={(e)=>handleNameChange(e)} />
                </label>
                <label>
                   Payment Method:
                   <select name="paymentMethod" onChange={(e)=>handlePaymentChange(e)}>
                      <option value="cash">cash</option>
                      <option value="card">card</option>
                      <option value="upi">upi</option>
                   </select>
                </label>
                {/* {productList.map((p,num) => (
                <label>hello */}
                <label>
                   Id:
                   <input type="number" name="id" onChange={(e)=>handleProductChange(e)} />
                </label>
                <label>
                   Product Name:
                   <input type="text" name="name" onChange={(e)=>handleProductChange(e)} />
                </label>
                <label>
                   Category:
                   <input type="text" name="category" onChange={(e)=>handleProductChange(e)} />
                </label>
                <label>
                   Quantity:
                   <input type="number" name="quantity" onChange={(e)=>handleProductChange(e)} />
                </label>
                <label>
                   Price:
                   <input type="number" name="price"  onChange={(e)=>handleProductChange(e)} />
                </label>
                <label>
                   Total:
                   <input type="number" name="total" onChange={(e)=>handleProductChange(e)} />
                </label>
                {/* </label>))} */}
                {/* <label>
                   Product Details:
                   <input type="text" name="productDetails" onChange={(e)=>handleInputChange(e)} />
                </label> */}
                <label>
                   Total Amount:
                   <input type="number" name="totalAmount" onChange={(e)=>handleTotalChange(e)} />
                </label>
                <button type="submit">Add Details</button>
            </form>
        </div>

        {/* <div>
            <h1>Order Details</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>
                   Id:
                   <input type="number" name="id" onChange={(e)=>handleChange(e)} />
                </label>
                <label>
                   Product Name:
                   <input type="textr" name="name" onChange={(e)=>handleChange(e)} />
                </label>
                <label>
                   Category:
                   <input type="text" name="category" onChange={(e)=>handleChange(e)} />
                </label>
                <label>
                   Quantity:
                   <input type="number" name="quantity" onChange={(e)=>handleChange(e)} />
                </label>
                <label>
                   Price:
                   <input type="number" name="price" onChange={(e)=>handleChange(e)} />
                </label>
                <label>
                   Total:
                   <input type="number" name="total" onChange={(e)=>handleChange(e)} />
                </label>
                <label>
                   Total Amount:
                   <input type="number" name="totalAmount" onChange={(e)=>handleChange(e)} />
                </label>
                <button type="submit">Add Order Details</button>
            </form>
        </div> */}

        </UserBase>

      );
    


};

export default OrderManagement;