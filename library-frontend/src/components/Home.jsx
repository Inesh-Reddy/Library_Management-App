import { useContext } from "react";
import { LibraryContext } from "../App";

const Home = () => {
  const { books, isLoading, errorMessage } = useContext(LibraryContext);

  return (
    <div>
      <h2>Home</h2>
      {isLoading ? (
        <h1>{"isLoading..."}</h1>
      ) : errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <div>
          <ol>
            {books.map((item, index) => {
              return (
                <li key={index}>
                  {item.title}. - {item.author}.
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Home;
