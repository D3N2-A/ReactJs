import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// <-----------------Setup Vars------------------------->
const books = [
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL604_SR604,400_.jpg",
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71sBtM3Yi5L._AC_UL604_SR604,400_.jpg",
  },
];
// <-----------------Componenets------------------------->

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        return <Book book={book} />;
      })}
    </section>
  );
}
const Book = (props) => {
  const { image, title, author } = props.book;
  console.log(props);
  return (
    <article className="book">
      <img className="photo" src={image} alt="" />
      <h1 style={{ color: "#232946" }}>{title}</h1>
      <h4 style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>{author}</h4>
    </article>
  );
};

// <------------------------------------------>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
