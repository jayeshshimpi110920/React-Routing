import { Link } from "react-router-dom";

const BookDetails1 = () => {
  const ss = {
    textAlign: "left",
    margin: "30px"
  };
  const mystyle = {
    color: "red"
  };
  return (
    <>
      <h3>book Details here</h3>
      <div>
        <Link style={mystyle} to="/">
          Go back to home
        </Link>
      </div>
      <div style={ss}>
        <h4>Book Name : Wings of Fire</h4>
        <p>
          <strong>Author Name :</strong> APJ Abdul Kalam
        </p>
        <p>
          {" "}
          <strong>Details :</strong> Wings of Fire: An Autobiography of APJ
          Abdul Kalam (1999), former President of India. It was written by Dr.
          Abdul Kalam and Arun Tiwari.
        </p>
      </div>
    </>
  );
};

export default BookDetails1;
