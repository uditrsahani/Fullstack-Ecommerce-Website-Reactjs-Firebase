import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Home from "./pages/home/Home";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo"; 
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import ProductCard from "./components/productCard/ProductCard";
import Allproducts from "./pages/allproducts/AllProducts";
import { ContactUs } from "./pages/contact/ContactUs";
import About from "./pages/about/About";
import ReturnPolicy from "./pages/returnpolicy/ReturnPolicy";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import UserProfile from "./components/test/Test";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/order" element={<Order></Order>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/*" element={<NoPage></NoPage>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/productInfo/:id" element={<ProductInfo/>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/updateproduct" element={<UpdateProduct/>} />
          <Route path="/products" element={<ProductCard/>}/>
          <Route path='/allproducts' element={<Allproducts/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/return-policy' element={<ReturnPolicy/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/test' element={<UserProfile/>}/>
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;

//user
export const ProtectedRoutes = ({})=>{
  if(localStorage.getItem('currentUser')){
    return Children;
  }else{
    return <Navigate to='/login'/>
  }
}

//admin
export const ProtectedRoutesForAdmin = ({children})=>{
  const admin = JSON.parse(localStorage.getItem('user'));
  console.log(admin.user.email);
  if(admin.user.email === 'uditrsahani@gmail.com'){
    return children;
  }else{
    return <Navigate to='/login' />
  }
}