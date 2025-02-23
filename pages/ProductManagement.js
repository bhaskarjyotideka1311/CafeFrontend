import React, { useState, useEffect, useLayoutEffect } from 'react'
import ProductService from '../services/ProductService';
import UserBase from '../components/UserBase';
// import css from './TryOrder.css';
import {Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Label,Input,Button} from "reactstrap";
import './ProductManagement.css';


const ProductManagement = ()=>{
    
    const[product,setProduct]=useState({
        categoryId:"",
        name:"",
        description:"",
        price:""
    });

    const handleInputChange=(e)=>{

        const value=e.target.value;
        setProduct({...product, [e.target.name]: value});
       
    };

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(product);
    
        ProductService.addNewProduct(product).then((res)=>{
          console.log(res.data);
        }).catch((error)=>{
          console.log(error);
    
        });
      };

      const [productList, setProductList] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts().then((res) => {
            console.log(res.data);
            setProductList(res.data)

        }).catch((error) => {
            console.log(error);
        });

    },[]);
    let imagestyle = {
        height:"85vh",
        width:"60vw",
        // backgroundImage:'url("https://media.istockphoto.com/id/920402574/vector/cartoon-woman-chef-menu-scroll.jpg?s=170667a&w=0&k=20&c=_JJzUsxnlEzJ7LPG0IVTx9lbY_rtYrTTBFLm_bwJ5uI=")',
        backgroundImage:'url("https://img.freepik.com/premium-vector/mexican-enchiladas-burritos-cartoon-characters_8071-6366.jpg?size=626&ext=jpg&ga=GA1.2.304065972.1683359930&semt=ais")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        
      }
      useLayoutEffect(() => {
        document.body.style.backgroundColor="#fff"
   });

    return(

        <UserBase>
            <div class = "image" style={imagestyle}>
            <Container>
            <Row className="mt-0">
           <Col sm={{size:9,offset:10}}>
          <Card color='secondary' inverse>
            <CardHeader> 
              <h3>Product Management</h3>
              </CardHeader>
            <Form onSubmit={(e)=>handleFormSubmit(e)}>
            <FormGroup>
             <Label for="catgoryId">Enter Category Id</Label>
            <Input  type="number" name="categoryId" id="categoryId" placeholder='Enter Category' onChange={(e)=>handleInputChange(e)} />
             </FormGroup>
                <FormGroup>
                 <Label for="name">Enter Name</Label>
                   <Input  type="text" name="name" id="name" placeholder='Enter Name' onChange={(e)=>handleInputChange(e)} />
                </FormGroup>
                <FormGroup>
                <Label for="price">Enter Price</Label>
            <Input  type="number" name="price" placeholder='Enter Price' id="price" onChange={(e)=>handleInputChange(e)} />
            </FormGroup>
                <Button outline color='light' type="submit">Add Product</Button>
            </Form>
            {/* </Card>
            </Col>
         </Row> */}
        {/* </Container>

        <Container>
             <Row className="mt-4">
            <Col sm={{size:6,offset:3}}>
            <Card color='secondary' inverse> */}
                <CardHeader>
                    <h3>All Product Details</h3>
                 </CardHeader>

                            <div className="card-body">
                                <table class="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">ProductId</th>
                                      <th scope="col">CategoryId</th>
                                      <th scope="col">Name</th>
                                      {/* <th scope="col">Description</th> */}
                                      <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {productList.map((p, num) => (
                                    <tr>
                                        <td>{num+1}</td>
                                        <td>{p.categoryId}</td>
                                        <td>{p.name}</td>
                                        {/* <td>{p.description}</td> */}
                                        <td>{p.price}</td>
                                    </tr> ))}
                                </tbody>
                                </table>
                    </div>
                </Card>
            </Col>
          </Row>
        </Container>
        </div>
        </UserBase>
    );
    
};

export default ProductManagement;