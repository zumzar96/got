import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/homepage";
import Likedimages from "./components/likedimages";
import Books from "./components/books";
import Characters from "./components/characters";
import Houses from "./components/houses";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


import "./App.css";

function App() {
  const queryClient = new QueryClient();


  return (
    
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/favorites" element={<Likedimages/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/characetrs" element={<Characters/>}/>
        <Route path="/houses" element={<Houses/>}/>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;
