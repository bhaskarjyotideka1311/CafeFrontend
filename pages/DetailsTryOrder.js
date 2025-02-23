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
//     event.preventDefault();
//     const { filename, contactNumber, email, name, paymentMethod, productDetails, totalAmount } = this.state;
//     let token = localStorage.getItem('token')
//     console.log(token);
//     axios
//       .post('http://localhost:8082/bill/generateReport',{headers:{"Authorization":`Bearer ${token}`}}, {
//         filename,
//         contactNumber,
//         email,
//         name,
//         paymentMethod,
//         productDetails,
//         totalAmount,
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
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
//                   <input type="text" name="id" value={product.id} onChange={(event) => JSON.parse(this.handleProductDetailsChange(index, event))} />
//                 </td>
//                 <td>
//                   <input type="text" name="name" value={product.name} onChange={(event) => JSON.parse(this.handleProductDetailsChange(index, event))} />
//                 </td>
//                 <td>
//                   <input type="text" name="category" value={product.category} onChange={(event) => JSON.parse(this.handleProductDetailsChange(index, event))} />
//                 </td>
//                 <td>
//                   <input type="text" name="quantity" value={product.quantity} onChange={(event) => JSON.parse(this.handleProductDetailsChange(index, event))} />
//                 </td>
//                 <td>
//                   <input type="text" name="price" value={product.price} onChange={(event) => JSON.parse(this.handleProductDetailsChange(index, event))} />
//                 </td>
//                 <td>
//                   <input type="text" name="total" value={product.total} onChange={(event) => JSON.parse(this.handleProductDetailsChange(index, event))} />
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

//------------------------------------------------------------------------------------------------------------------------------------------//////
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