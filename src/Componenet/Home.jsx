import { Link } from "react-router-dom";
import AddBook from "./AddBook";

const Home = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);

  const mystyle = {
    textAlign: "left"
  };

  const mystylee = {
    padding: "10px",
    border: "1px solid black",
    margin: "5px",
    backgroundColor: "grey"
  };

  return (
    <>
      <h1>Home here</h1>
      <p>&copy; Jayesh Shimpi</p>
      <Link style={mystylee} to="/add-books">
        Add-Book
      </Link>
      <Link style={mystylee} to="/manage-books">
        Manage-Book
      </Link>
      <h2>List of Book here</h2>

      <ol style={mystyle}>{listItems}</ol>
    </>
  );
};

export default Home;

// return (

// );
