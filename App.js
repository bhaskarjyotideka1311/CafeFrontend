
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Base from './components/Base';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privateroute from './components/Privateroute';
import Userdashboard from './pages/Userdashboard';
import CategoryManagement from './pages/CategoryManagement';
import ProductManagement from './pages/ProductManagement';
import OrderManagement from './pages/OrderManagement';
import TryOrder from './pages/TryOrder';
import ProductTry from './pages/ProductTry';
//import img1 from './picture/cartoon.jpg';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/user" element={<Privateroute />}>
          <Route path="dashboard" element={<Userdashboard />} />
        </Route>

        <Route path="/category" element={<CategoryManagement />} />
        <Route path="/product" element={<ProductManagement />} />
        <Route path="/order" element={<TryOrder />} />
        <Route path="/producttry" element={<ProductTry/>} />
      </Routes>
      {/* <div>
        <img src={img1} style={{ height: '92vh', width: '100vw' }}/>
      </div> */}
    </BrowserRouter>
  );
};

export default App;
