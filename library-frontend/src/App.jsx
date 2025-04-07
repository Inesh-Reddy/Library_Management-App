import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import ErrorRouteHandler from "./components/Error";
import Layout from "./components/Layout";

export const LibraryContext = createContext();

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/books");
        const data = await response.json();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.log(error);
        setErrorMessage("Failed to fetch books");
      } finally {
        setIsLoading(false);
      }
    };

    getBooks();
  }, []);

  return (
    <BrowserRouter>
      <LibraryContext.Provider
        value={{
          books,
          isLoading,
          errorMessage,
          setBooks,
          setIsLoading,
          setErrorMessage,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddBook />} />
            <Route path="edit/:id" element={<EditBook />} />
            <Route path="*" element={<ErrorRouteHandler />} />
          </Route>
        </Routes>
      </LibraryContext.Provider>
    </BrowserRouter>
  );
}

export default App;
