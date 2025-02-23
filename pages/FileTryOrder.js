import axios from "axios";
import { Component } from "react";

class FileTryOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
          filename: '',
          contactNumber: '',
          email: '',
          name: '',
          paymentMethod: '',
          productDetails: '[{id:{this.state.id},name:{this.state.name},category:{this.state.category},quantity:{this.state.quantity},price:{this.state.price},total:{this.state.total}}]',
          totalAmount: '',
        };
    }

        handleInputChange = (event) => {
            const { name, value } = event.target;
            this.setState({
              [name]: value,
            });
        };


        handleSubmit = (event) => {
            event.preventDefault();
            const { filename, contactNumber, email, name, paymentMethod, productDetails, totalAmount } = this.state;
            let token = localStorage.getItem('token')
            console.log(token);
            axios.post('http://localhost:8082/bill/generateReport',{headers:{"Authorization":`Bearer ${token}`}},{
                filename,
                contactNumber,
                email,
                name,
                paymentMethod,
                productDetails,
                totalAmount,
            })
            .then((response) => {
                console.log(response);
            })
              .catch((error) => {
                console.error(error);
                console.log("error");
            });
        };

        render() {
            const { filename, contactNumber, email, name, paymentMethod, productDetails,totalAmount} = this.state;
            return (
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="filename" value={filename} onChange={this.handleInputChange} />
                <input type="number" name="contactNumber" value={contactNumber} onChange={this.handleInputChange} />
                <input type="email" name="email" value={email} onChange={this.handleInputChange} />
                <input type="text" name="name" value={name} onChange={this.handleInputChange} />
                <input type="text" name="paymentMethod" value={paymentMethod} onChange={this.handleInputChange} />
                <input type="number" name="productDetails" value={productDetails.id} onChange={this.handleInputChange} />
                <input type="text" name="productDetails" value={productDetails.name} onChange={this.handleInputChange} />
                <input type="text" name="productDetails" value={productDetails.category} onChange={this.handleInputChange} />
                <input type="number" name="productDetails" value={productDetails.quantity} onChange={this.handleInputChange} />
                <input type="number" name="productDetails" value={productDetails.price} onChange={this.handleInputChange} />
                <input type="number" name="productDetails" value={productDetails.total} onChange={this.handleInputChange} />
                <input type="number" name="totalAmount" value={totalAmount} onChange={this.handleInputChange} />
                <button type="submit">Submit</button>
              </form>
            );
          }
}

export default FileTryOrder;