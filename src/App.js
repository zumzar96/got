import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Books from "./pages/Books";
import Characters from "./pages/Characters";
import Houses from "./pages/Houses";
import Login from "./pages/Login"
import Register from "./pages/Register"
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


import "./App.css";

function App() {
  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/books" element={<Books/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/houses" element={<Houses/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>


      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;
