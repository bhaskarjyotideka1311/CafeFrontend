import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { myAxios } from '../services/helper';
import CategoryService from '../services/CategoryService';

import UserBase from "../components/UserBase";
import {Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Label,Input,Button} from "reactstrap";

const CategoryManagement = ()=> {

  const [category,setCategory]=useState({
    name:""
  });

  const handleInputChange=(e)=>{
    const value=e.target.value;
    setCategory({...category, [e.target.name]: value});
  };

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(category);

    CategoryService.addNewCategory(category).then((res)=>{
      console.log(res.data);
    }).catch((error)=>{
      console.log(error);

    });
  };


  const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        CategoryService.getAllCategory().then((res) => {
            console.log(res.data);
            setCategoryList(res.data)

        }).catch((error) => {
            console.log(error);
        });

    },[]);



  // const [categories, setCategories] = useState([]);
  // const [formData, setFormData] = useState({ name: '', description: '' });
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchCategories() {
  //     const response = await myAxios.get('/category/get');
  //     setCategories(response.data);
  //   }

  //   fetchCategories();
  // }, []);

  // const handleInputChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     await myAxios.post('/category/add', formData);
  //     setFormData({ name: '', description: '' });
  //     const response = await myAxios.get('/category/get');
  //     setCategories(response.data);
  //   } catch (error) {
  //     setError(error.response?.data?.message || 'Somethinggg went wrong!');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleUpdateCategory = async (categoryId, newCategoryData) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     await myAxios.post(`/category/update/${categoryId}`, newCategoryData);
  //     const response = await myAxios.get('/category/get');
  //     setCategories(response.data);
  //   } catch (error) {
  //     setError(error.response?.data?.message || 'Somethingggg went wrong!');
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  let imagestyle = {
    height:"85vh",
    width:"60vw",
    backgroundImage:'url("https://cdn.dribbble.com/users/4779776/screenshots/9836817/dribble_chef-01.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
    
  }

  return (
    <UserBase>
      <div class = "image" style={imagestyle}>
    <Container>
    <Row className="mt-0">
    <Col sm={{size:8,offset:10}}>
    <Card color='secondary' inverse>
      <CardHeader>
      <h2>Category Management</h2>
      </CardHeader>
      <CardBody>
      <Form onSubmit={(e)=>handleFormSubmit(e)}>
        <div>
        <FormGroup>
         <Label for="name">Enter Name</Label>
            <Input type="text" placeholder='Enter Category' name="name" onChange={(e)=>handleInputChange(e)} />
       </FormGroup>
        <Button outline color="light" type="submit">Add Category</Button>
        </div>
      </Form>
      
      {/* </CardBody>
      </Card>
      </Col>
     </Row> */}
      {/* </Container> */}

   
    {/* <Container> */}
    {/* <Row className="mt-4">
    <Col sm={{size:6,offset:10}}>
    <Card color='secondary' inverse> */}
        {/* <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center"> */}
                            <CardHeader>
                               <h2> All Category Details</h2>
                            {/* </div> */}
                            </CardHeader>
                            <div className="card-body">
                                <table class="table">
                                  <thead>
                                    <tr>
                                      
                                      <th scope="col">CategoryId</th>
                                      <th scope="col">Name</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                {categoryList.map((p, num) => (
                                    <tr>
                                        <td>{num+1}</td>
                                        
                                        <td>{p.name}</td>
                                        
                                    </tr> ))}
                                </tbody>
                                </table>
                            </div>
                        {/* </div>
                    </div>
                </div>
            </div> */}
            </CardBody>
            </Card>
            </Col>
     </Row>
        </Container>
        </div> 
    </UserBase>
  );
};

export default CategoryManagement;