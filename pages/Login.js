import Base from "../components/Base";
import {Container,Row,Col,Card,CardHeader,CardBody,Form,FormGroup,Label,Input,Button, CardGroup} from "reactstrap";
import { useState,  useLayoutEffect } from "react";
// import { toast } from "react-toastify";
// import { loginUser } from "../services/user-service";
// import { doLogin } from "../auth";
//import axios from "axios";
import { myAxios } from "../services/helper";
import { useNavigate } from "react-router-dom";
//import { useHistory } from 'react-router-dom';

// const Login=()=>{
    
//     const [loginDetail,setLoginDetail]=useState({
//         username:'',
//         password:''
//     });

//     const[error,setError]=useState(null);
//     const[isLoading,setIsLoading]=useState(false);
//     //const history = useHistory();

//     const handleChange=(event)=>{
//         setLoginDetail({
//             ...loginDetail,[event.target.name]:event.target.value
//         });
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         setIsLoading(true);
//         setError(null);
    
//         try {
//           const response = await myAxios.post('/user/login', loginDetail);
//           localStorage.setItem('token', response.data.token);
//           //history.push('/dashboard');
//         } catch (error) {
//           setError(error.response?.data?.message || 'Something went wrong!');
//         } finally {
//           setIsLoading(false);
//         }
//       };


//     // const handleChange=(event,field)=>{

//     //     let actualValue=event.target.value
//     //     setLoginDetail({
//     //       ...loginDetail,
//     //       [field]:actualValue
//     //     })
//     // }  
    
//     // const handleFormSubmit=(event)=>{
//     //     event.preventDefault();
//     //     console.log(loginDetail);
//     //     //validation
//     //     if(loginDetail.username.trim()==='' || loginDetail.password.trim()===''){
//     //         toast.error("Username or Password is required !!")
//     //         return;
//     //     }

//     //     loginUser(loginDetail).then((data)=>{
//     //       //console.log("user login :")
//     //       console.log(data);

//     //       doLogin(data,()=>{
//     //         console.log("login detail save to local storage")
//     //       })
//     //       toast.success("Login Success")
//     //     }).catch(error=>{
//     //       console.log(error)
//     //       if(error.response.status===400 || error.response.status===404){
//     //         toast.error(error.response.data.message)
//     //       }else{
//     //         toast.error("something went wrong")
//     //       }
//     //     })
        


//     // };
     
//     // loginUser(loginDetail).then((data)=>{
//     //     console.log("user login :")
//     //     console.log(data);
//     //     toast.success("Login Success")
//     // }).catch(error=>{
//     //     console.log(error)
//     //     if(error.response.status===400 || error.response.status===404){
//     //         toast.error(error.response.data.message)
//     //     }else{
//     //         toast.error("something went wrong")
//     //     }
//     // })
// //onChange={(e)=> handleChange(e,'username')}// onChange={(e)=> handleChange(e,'password')}


//     return (
//         <Base>
//             <Container>
//         <Row className="mt-4">

//             <Col sm={{size:6,offset:3}}>

//                 <Card color="dark" inverse>
//                     <CardHeader>
//                         <h3>Login here !!</h3>
//                     </CardHeader>

//                     <CardBody>
//                         <Form onSubmit={handleFormSubmit}>
//                         <FormGroup>

//                             <Label for="email">Enter Email</Label>
//                             <Input type="email" 
//                             placeholder="Enter email" 
//                             id="email" 
//                             value={loginDetail.username}
//                             onChange={handleChange}
//                             />
                            
//                         </FormGroup>

//                         <FormGroup>

//                             <Label for="password">Enter Password</Label>
//                             <Input type="password" 
//                             placeholder="Enter Password" 
//                             id="password" 
//                             value={loginDetail.password}
//                             onChange={handleChange}
//                             />
                            
//                         </FormGroup>
//                         <Container className="text-center">
//                             <Button outline color="light">Login</Button>
//                         </Container>
//                         </Form>
//                     </CardBody>

//                 </Card>
//             </Col>    
//         </Row>

//     </Container>
//         </Base>
//     );
// };

//export default Login;

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    //const history = useHistory();
    const navigate = useNavigate();
  
    const handleInputChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await myAxios.post('/user/login', formData);
        localStorage.setItem('token', response.data.token);
        //history.push('/dashboard');
        navigate("/user/dashboard");
        //console.log(token);
      } catch (error) {
        setError(error.response?.data?.message || 'Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    let imagestyle = {
      height:"89vh",
      width:"100vw",
      // backgroundImage:'url("https://media.istockphoto.com/id/920402574/vector/cartoon-woman-chef-menu-scroll.jpg?s=170667a&w=0&k=20&c=_JJzUsxnlEzJ7LPG0IVTx9lbY_rtYrTTBFLm_bwJ5uI=")',
      backgroundImage:'url("https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=360")',
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
        <Row className="mt-4">
        <Col sm={{size:6,offset:3}}>
          <Card color="dark" inverse>
           
        
          <CardHeader>
        <h2>Please Login</h2>
        </CardHeader>
        <CardBody>
        <Form onSubmit={handleFormSubmit}>
          <FormGroup>
          <Label for="email">Enter Email</Label>
            <Input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} />
          
          </FormGroup>
          <FormGroup>
          <Label for="password">Enter Password</Label>
            <Input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleInputChange} />
          
          </FormGroup>
          {error && <div>{error}</div>}
          <Container className="text-center">
          <Button outline color="light" type="submit" disabled={isLoading}>Login</Button>
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

export default Login;