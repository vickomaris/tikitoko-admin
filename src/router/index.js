import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "../views/auth/login";
import Home from "../views";

// Tikitoko
import BuyerList from "../views/user/buyer";
import BuyerDetail from "../views/user/buyerDetail";
import SellerList from "../views/user/seller";
import SellerDetail from "../views/user/sellerDetail";
import CategoryList from "../views/category/list";
import CategoryDetail from "../views/category/detail";
import CategoryInsert from "../views/category/insert";
import CategoryEdit from "../views/category/edit";
import ProductList from "../views/product/list";
import ProductDetail from "../views/product/detail";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

// const Auth = ({ children }) => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     swal({
//       title: "Denied!",
//       text: `Access Denied, Please Login!`,
//       icon: "error",
//     });
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />

          <Route path="/buyer" element={<BuyerList />} />
          <Route path="/buyer/:id" element={<BuyerDetail />} />

          <Route path="/seller" element={<SellerList />} />
          <Route path="/seller/:id" element={<SellerDetail />} />

          <Route path="/category" element={<CategoryList />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/categorynew" element={<CategoryInsert />} />
          <Route path="/category/edit/:id" element={<CategoryEdit />} />

          <Route path="/product" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
