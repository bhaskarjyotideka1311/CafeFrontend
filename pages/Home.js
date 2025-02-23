import Base from "../components/Base";
//import img1 from "./images/cartoon.jpg";
import video from './video1.mp4';
import './home.css';
const Home=()=>{
    // let imagestyle = {
    //     height:"87vh",
    //     width:"100vw",
    //     backgroundImage:'url("https://cdn.pixabay.com/photo/2016/05/26/14/11/chef-1417239__340.png")',
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "contain",
       
    //class = "image" style={imagestyle}  
    //   }
    return (
        <Base> 
            <div>
                {/* <h1>home page</h1> */}
               {/* <img src={img1} alt="" /> */}
               <video autoPlay loop muted>
		       <source src={video} type='video/mp4' />
	            </video>
            </div>      
        </Base>
    );
};


export default Home;