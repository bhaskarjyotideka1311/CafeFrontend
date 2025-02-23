

// import React, { Component } from 'react';
// import axios from 'axios';

// class TryOrder extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filename: '',
//       contactNumber: '',
//       email: '',
//       name: '',
//       paymentMethod: '',
//       productDetails: [
//         {
//           "id": "",
//           "name": "",
//           "category": "",
//           "quantity": "",
//           "price": "",
//           "total": "",
//         },
//     ],
//       totalAmount: '',
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleProductDetailsChange = (index, event) => {
//     const { name, value } = event.target;
//     const productDetails = [...this.state.productDetails];
//     productDetails[index][name] = value;
//     this.setState({ productDetails });
//   };

//   handleSubmit = (event) => {
//     const jsonOrder = JSON.stringify({
//               filename: event.target.filename.value,
//               
//             })
//     event.preventDefault();
//     const { filename, contactNumber, email, name, paymentMethod, productDetails, totalAmount } = this.state;
//     let token = localStorage.getItem('token')
//     console.log(token);
//     console.log(filename)
//     const res =  axios.post('http://localhost:8082/bill/generateReport', jsonOrder, {
// headers: {
// // Overwrite Axios's automatically set Content-Type
// 'Content-Type': 'application/json',
// 'Authorization':`Bearer ${token}`
// }
// });
// // res.data.data;
// // res.data.headers['Content-Type'];
//     // axios
//     //   .post('http://localhost:8083/bill/generateReport',{headers:{"Authorization":`Bearer ${token}`}}, {
//         // filename,
//         // contactNumber,
//         // email,
//         // name,
//         // paymentMethod,
//         // productDetails,
//         // totalAmount,
//         //jsonOrder,
//       // })
//       // .then((response) => {
//       //   console.log(response);
//       // })
//       // .catch((error) => {
//       //   console.error(error);
//       // });
//   };



//   render() {
//     const { filename, contactNumber, email, name, paymentMethod, productDetails, totalAmount } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" name="filename" value={filename} onChange={this.handleInputChange} />
//         <input type="text" name="contactNumber" value={contactNumber} onChange={this.handleInputChange} />
//         <input type="text" name="email" value={email} onChange={this.handleInputChange} />
//         <input type="text" name="name" value={name} onChange={this.handleInputChange} />
//         <input type="text" name="paymentMethod" value={paymentMethod} onChange={this.handleInputChange} />
//         <table>
//           <thead>
//             <tr>
//               <th>Product ID</th>
//               <th>Name</th>
//               <th>Category</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Total</th>
//               {/* <th>Actions</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {productDetails.map((product, index) => (
//               <tr key={index}>
//                 <td>
//                   <input type="text" name="id" value={product.id} onChange={(event) => this.handleProductDetailsChange(index, event)} />
//                 </td>
//                 <td>
//                   <input type="text" name="name" value={product.name} onChange={(event) => this.handleProductDetailsChange(index, event)} />
//                 </td>
//                 <td>
//                   <input type="text" name="category" value={product.category} onChange={(event) => this.handleProductDetailsChange(index, event)} />
//                 </td>
//                 <td>
//                   <input type="text" name="quantity" value={product.quantity} onChange={(event) => this.handleProductDetailsChange(index, event)} />
//                 </td>
//                 <td>
//                   <input type="text" name="price" value={product.price} onChange={(event) => this.handleProductDetailsChange(index, event)} />
//                 </td>
//                 <td>
//                   <input type="text" name="total" value={product.total} onChange={(event) => this.handleProductDetailsChange(index, event)} />
//                 </td>
//                </tr>))}
//               </tbody>
//             </table>
//             <input type="text" name="totalAmount" value={totalAmount} onChange={this.handleInputChange} />
//             <button type="submit">Submit</button>
//         </form>
//     )
                
// }
// };

// export default TryOrder;















//*********************************************************** */
//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import ProductService from '../services/ProductService';
import {Card, CardBody, CardHeader, Container,Button,Label,FormGroup,Input,Row,Col,Placeholder } from 'reactstrap';
// import './Style/Order.css';
//import backgroundImage from './picture/cartoon.jpg';
import css from './TryOrder.css';
import UserBase from '../components/UserBase';


function TryOrder() {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPrice = quantity * total;
    setPrice(newPrice);
    setFormSubmitted(true);
  };



  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedCategoryId) {
      // Fetch products based on selected category ID
      // useEffect(() => {
          ProductService.getByCategory(selectedCategoryId).then((res) => {
              console.log(res.data);
              setProducts(res.data)
  
          }).catch((error) => {
              console.log(error);
          });
  
      // },[]);
   }
  },[selectedCategoryId]);

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
  };

  const [name, setName] = useState('');
  const [payment, setPayment] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setFormSubmitted(true);
  // };
//-------------------------------------------------------------------------------------------------------------------------------------------------
//const ProductTry = () => {
  // const [selectedCategoryId, setSelectedCategoryId] = useState('');
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (selectedCategoryId) {
  //     // Fetch products based on selected category ID
  //     // useEffect(() => {
  //         ProductService.getByCategory(selectedCategoryId).then((res) => {
  //             console.log(res.data);
  //             setProducts(res.data)
  
  //         }).catch((error) => {
  //             console.log(error);
  //         });
  
  //     // },[]);
  //  }
  // },[selectedCategoryId]);

  // const handleCategoryChange = (event) => {
  //   setSelectedCategoryId(event.target.value);
  // };
//------------------------------------------------------------------------------------------------------------------------------------------------ 
let imagestyle = {
  height:"95vh",
  width:"60vw",
  backgroundImage:'url("https://cdn3.vectorstock.com/i/1000x1000/83/62/chef-woman-gesturing-ok-vector-20818362.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  
  
}

return (
  <UserBase>
  <div class = "image" style={imagestyle}>
  <Container >
    <Row className="mt-2">
    <Col sm={{size:9,offset:10}}>
    <Card color="dark" inverse>
   {/* <div> */}
   <CardHeader>
       <h2>Order Management</h2>
       </CardHeader>
       <CardBody>
       <div>
      <div>
        <h3>Product List</h3>
        <label htmlFor="category">Select a category:</label>
        <select id="category" value={selectedCategoryId} onChange={handleCategoryChange}>
          <option value="">-- Select a category --</option>
          <option value="1">South Indian</option>
          <option value="2">Chinese</option>
          <option value="3">Italian</option>
          <option value="4">Biriyani</option>
          <option value="5">Coffee</option>
          <option value="6">North Indian</option>
          {/* Add more options as needed */}
        </select>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* <label>
          Product:
          <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        </label>
        <br />
        <label>
          Total:
          <input type="number" value={total} onChange={(e) => setTotal(parseInt(e.target.value))} />
        </label>
        <br />
        <button type="submit">Calculate Price</button> */}
      {/* </form> */}

                <FormGroup>

                        <Label for="name">Enter Name</Label>
                        <Input 
                        type="text" 
                        placeholder="Enter Name" 
                        id="name" 
                        onChange={handleNameChange}
                        value={name}
                        />

                    </FormGroup>
                    <FormGroup>

                     <Label for="Payment Method">Payment Method</Label>
                     {/* <Input 
                     type="email"
                     placeholder="Enter Email" 
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    /> */}
                    <select name='Payment Method' value={payment}
                    onChange={handlePaymentChange}>
                      <option>Cash</option>
                      <option>Card</option>
                      <option>UPI</option>
                    </select>
         </FormGroup>
         <FormGroup>

           <Label for="name">Enter Contact Number</Label>
            <Input
            type="tel"
            placeholder="Enter Contact Number" 
            id="contactNumber"
            value={contactNumber}
            onChange={handleContactNumberChange}
           />
       </FormGroup>
       <FormGroup>
        <Label for="product">Product</Label>
        {/* <label>
          Product: */}
          <Input type="text" id="product" placeholder='Type Your Product' value={product} onChange={(e) => setProduct(e.target.value)} />
        {/* </label> */}
        </FormGroup>
        {/* <br /> */}
        <FormGroup>
        <Label for="quantity">Quantity</Label>
          <Input type="number" id="quantity" placeholder='Enter Quantity' value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
        </FormGroup>
      
        <FormGroup>
        <Label for="Total">Amount</Label>
          <Input type="number" id="Total" placeholde="Enter Price" value={total} onChange={(e) => setTotal(parseInt(e.target.value))} />
       </FormGroup>
        {/* <br /> */}
        <Button color="primary" type="submit">Calculate Price</Button>
        
      {/* {price > 0 && (
        <div>
          <p>You have to pay ${price}</p>
        </div>
      )} */}
      </form>
      {formSubmitted && (
        <div>
          <h2>Submitted Details:</h2>
          <p>Name: {name}</p>
          <p>Payment Method: {payment}</p>
          <p>Contact Number: {contactNumber}</p>
        </div>
      )}
      {price > 0 && (
        <div>
          <p>You have to pay ${price}</p>
        </div>
      )}
      </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
   </div>
   </UserBase>
    
  );
}


export default TryOrder;
//  export default ProductTry;