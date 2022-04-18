import React, { useState, useEffect, useCallback, Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./components/homepage";
import Likedimages from "./components/likedimages";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";


import "./App.css";

function App() {
  const queryClient = new QueryClient();


  return (

    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/kita" element={<Homepage />} />
        <Route path="/favorites" element={<Likedimages />}></Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    
  );
}

export default App;
