import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import ErrorRouteHandler from "./components/Error";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddBook />} />
          <Route path="edit/:id" element={<EditBook />} />
          <Route path="*" element={<ErrorRouteHandler />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
