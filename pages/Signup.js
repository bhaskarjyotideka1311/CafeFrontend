import { useEffect, useState,useLayoutEffect } from "react";
import Base from "../components/Base";
import {Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Label,Input,Button} from "reactstrap";
// import {signUp} from "../services/user-service";
import { signUp } from "../services/user-service";
import { toast } from "react-toastify";

const Signup=()=>{
    
    const [data,setData]=useState({

        name:'',
        email:'',
        contactNumber:'',
        password:'',
    })
    
    const [error,setError]=useState({
        errors:{},
        isError:false
    })
    
    useEffect(()=>{
      console.log(data);
    },[data])

    const handleChange=(event,property)=>{
        setData({...data,[property]:event.target.value})
    }

    const submitForm=(event)=>{
        event.preventDefault()
        

        signUp(data).then((resp)=>{
            console.log(resp);
            console.log("success log");
            toast.success("User registerd successfully !!");
            setData({
                name:'',
                email:'',
                contactNumber:'',
                password:'',
            })
        }).catch((error)=>{
          console.log(error);
          console.log("Error log");
        });
    };

    let imagestyle = {
        height:"92vh",
        width:"100vw",
        // backgroundImage:'url("https://media.istockphoto.com/id/920402574/vector/cartoon-woman-chef-menu-scroll.jpg?s=170667a&w=0&k=20&c=_JJzUsxnlEzJ7LPG0IVTx9lbY_rtYrTTBFLm_bwJ5uI=")',
        backgroundImage:'url("https://img.freepik.com/premium-photo/delicate-yellow-abstract-watercolor-background_3590-82.jpg?size=626&ext=jpg&ga=GA1.2.304065972.1683359930&semt=ais")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
        
      }
      useLayoutEffect(() => {
        document.body.style.backgroundColor="#fff"
   });

    return (
        <Base>
        <div class = "image" style={imagestyle}>
             <Container>
        <Row className="mt-0">

            {/* {JSON.stringify(data)} */}

            <Col sm={{size:6,offset:3}}>

        
        <Card color="dark" inverse>
            <CardHeader>
                <h3> Fill Information to register !!</h3>
            </CardHeader>

            <CardBody>


                <Form onSubmit={submitForm}>

                    <FormGroup>

                        <Label for="name">Enter Name</Label>
                        <Input 
                        type="text" 
                        placeholder="Enter here" 
                        id="name" 
                        onChange={(e)=>handleChange(e,'name')}
                        value={data.name}
                        />

                    </FormGroup>

                    <FormGroup>

                        <Label for="email">Enter Email</Label>
                        <Input 
                        type="email" 
                        placeholder="Enter email" 
                        id="email" 
                        onChange={(e)=>handleChange(e,'email')}
                        value={data.email}
                        />
                        
                    </FormGroup>

                    <FormGroup>

                        <Label for="contactNumber">Enter Contact Number</Label>
                        <Input 
                        type="number" 
                        placeholder="Enter here" 
                        id="contactNumber" 
                        onChange={(e)=>handleChange(e,'contactNumber')}
                        value={data.contactNumber}
                        />

                    </FormGroup>

                    <FormGroup>

                        <Label for="password">Enter Password</Label>
                        <Input 
                        type="password" 
                        placeholder="Enter Password" 
                        id="password" 
                        onChange={(e)=>handleChange(e,'password')}
                        value={data.password}
                        />
                        
                    </FormGroup>

                    <Container className="text-center">
                        <Button outline color="light">Register</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>
        </Col>
        </Row>
    </Container>
    </div>
        </Base>
    );
};
export default Signup;