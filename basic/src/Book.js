const Book = ({ image, title, author }) => {
  // const { image, title, author } = props;

  return (
    <article className="book">
      <img className="photo" src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
