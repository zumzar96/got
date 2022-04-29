import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/Homepage";
import Books from "./components/Books";
import Characters from "./components/Characters";
import Houses from "./components/Houses";
import Login from "./components/Login"
import Register from "./components/Register"
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
