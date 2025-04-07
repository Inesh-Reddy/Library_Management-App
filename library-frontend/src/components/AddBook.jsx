import React, { useContext, useEffect, useRef, useState } from "react";
import { LibraryContext } from "../App";

const AddBook = () => {
  const { setBooks } = useContext(LibraryContext);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const isbnRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredAuthor = authorRef.current.value;
    const enteredIsbn = isbnRef.current.value;

    const newBook = {
      title: enteredTitle,
      author: enteredAuthor,
      isbn: enteredIsbn,
    };

    setIsSubmitting(true);
    const url = `http://localhost:8080/books`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      if (response.ok) {
        setBooks((prevBooks) => [...prevBooks, newBook]);
        titleRef.current.value = "";
        authorRef.current.value = "";
        isbnRef.current.value = "";
      } else {
        console.error("Failed to add book:");
      }
    } catch (error) {
      console.error("Error adding book:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={onSubmitHandler}>
        <input ref={titleRef} placeholder="Title" required /> <br />
        <br />
        <input ref={authorRef} placeholder="Author" required /> <br />
        <br />
        <input ref={isbnRef} placeholder="ISBN" required /> <br />
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
