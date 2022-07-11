import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// <-----------------Setup Vars------------------------->
import { books } from "./books";
import Book from "./Book";
// <-----------------Componenets------------------------->

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// <------------------------------------------>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
