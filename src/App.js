import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Books from "./pages/Books";
import Houses from "./pages/Tablets";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import NavB from "./components/Navbar"
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useSelector } from "react-redux";
import "./styles/index.scss";
import Laptops from "./pages/Laptops";
import Tablets from "./pages/Tablets";
import Product from "./pages/Product";
import SearchProduct from "./pages/SearchProduct";

function App() {
  const queryClient = new QueryClient();
  const Loggedin = useSelector((state) => state.user.isLogedin);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      {Loggedin ? (
            <NavB/>
          ) : null}
        <Routes>
          {!Loggedin
            ? [
                <Fragment>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Fragment>,
              ]
            : null}

          {Loggedin
            ? [
                <Fragment>
                  <Route exact path="/" element={<Homepage />} />
                  <Route path="/tablets" element={<Tablets />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/laptops" element={<Laptops />} />
                  <Route path="/laptops" element={<Laptops />} />
                  <Route path="/searchproduct" element={<SearchProduct />} />
                </Fragment>,
              ]
            : null}

          <Route path={"login"} element={<Navigate replace to={"/"} />} />
          <Route path={"/"} element={<Navigate replace to={"login"} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
