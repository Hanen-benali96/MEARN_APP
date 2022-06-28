import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import PrivateRoute from './router/PrivateRoute'
import NotFound from "./pages/NotFound";
import {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/action/authAction";
import Profile from "./pages/Profile/Profile";
import Error from "./components/Error";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import DetailsProduct from "./components//DetailProduct/DetailsProduct";
import Cart from "./pages/Cart/Cart";
import {Container} from "react-bootstrap"
import {getProduct} from './redux/action/actionProduct'
import Admin from "./pages/admin/Admin";
import AdminRoute from "./router/AdminRoute";
import Shipping from './pages/CheckoutSteps/shipping/Shipping'
import Contact from "./components/contact/Contact";



function App() {
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
     dispatch(getProduct());
  }, [dispatch]);
  const [ searchName, setSearchName] = useState("")

  return (
    <div className='App'>
      <NavBar  setSearchName={setSearchName}
       />
      <Error />
      <Container className='py-0'></Container>
      <Routes>
        <Route path='/' element={<Home  SearchName={searchName}/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/profile' element={
        <PrivateRoute>
        <Profile />
         </PrivateRoute>} />
        
      
        <Route path='/product/:id' element={<DetailsProduct/>}/>
       <Route path="/cart" element={<Cart/>}/>
    <Route path="/shipping" element={<Shipping/>} />
    
        <Route path='*' element={<NotFound />} />
        <Route path="/admin" element={
          <PrivateRoute>
            <AdminRoute>
             <Admin/>
            </AdminRoute>
          </PrivateRoute> } />
         
   
      </Routes>
   
     
   
   <Footer />
    </div>
  );
}

export default App;