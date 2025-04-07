import React, { useContext, useEffect, useRef, useState } from "react";
import { LibraryContext } from "../App";

const EditBook = () => {
  const { setBooks, setErrorMessage } = useContext(LibraryContext);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const isbnRef = useRef(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const onSubmitHandler = async () => {
    const titletoUpdate = titleRef.current.value;
    const authorToUpdate = authorRef.current.value;
    const isbnToUpdate = isbnRef.current.value;

    const bookToUpdate = {
      title: titletoUpdate,
      author: authorToUpdate,
      isbn: isbnToUpdate,
    };

    setIsUpdating(true);
    const url = `http://localhost:8080/books/${isbnToUpdate}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookToUpdate),
      });
      if (response.ok) {
        setBooks((prevBooks) => [...prevBooks, bookToUpdate]);
        titleRef.current.value = "";
        authorRef.current.value = "";
        isbnRef.current.value = "";
      } else {
        console.error("Failed to update book:");
      }
    } catch (error) {
      console.log("Error : ", error);
      setErrorMessage(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={onSubmitHandler}>
        <input ref={titleRef} placeholder="Title" required></input> <br></br>
        <br></br>
        <input ref={authorRef} placeholder="Author" required></input> <br />
        <br />
        <input ref={isbnRef} placeholder="Isbn" required></input> <br />
        <br />
        <button>{isUpdating ? "updating..." : "Update Book"}</button>
        {}
      </form>
    </div>
  );
};

export default EditBook;
