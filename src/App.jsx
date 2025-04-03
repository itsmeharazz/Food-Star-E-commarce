import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import ProductsDetails from "./pages/ProductsDetail";
import Navbar from "./components/navbar/Navbar";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/footer/Footer";
import SignInPopUp from "./components/popUp/SignInPopUp";

const App = () => {
     const [showLogin, setShowLogin] = useState(false);
  return (
    <>
        {showLogin ? <SignInPopUp setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeOrder' element={<PlaceOrder />} />
          <Route path='/productsDetails/:id' element={<ProductsDetails />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
