import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// <-----------------Setup Vars------------------------->
const firstBook = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  image:
    "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
};
// <-----------------Componenets------------------------->

function BookList() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className="book">
      <img className="photo" src={props.image} alt="" />
      <h1 style={{ color: "#232946" }}>{props.title}</h1>
      <h4 style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>
        {props.author}
      </h4>
    </article>
  );
};

// <------------------------------------------>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
