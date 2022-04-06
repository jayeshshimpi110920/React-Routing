import { Link } from "react-router-dom";

const ManageBook = (props) => {
  console.log(props.numbers);
  const btn = {
    color: "white",
    border: "1px solid black",
    backgroundColor: "grey",
    margin: "20px"
  };
  const numbers = props.numbers;

  function DeleteHandle(number) {
    var index = props.numbers.indexOf(number);
    if (index !== -1) props.numbers.splice(index, 1);
    alert("Done Deleted   --> " + number);
  }
  const listItems = numbers.map((number) => (
    <li>
      {number}
      <Link style={btn} to="/manage-books/1" data={{ number }}>
        {" "}
        Details
      </Link>
      <button onClick={() => DeleteHandle(number)}>Delete</button>
    </li>
  ));

  const mystyle = {
    textAlign: "left"
  };

  // const mystylee = {
  //   padding: "10px",
  //   border: "1px solid black",
  //   margin: "5px",
  //   backgroundColor: "grey"
  // };

  return (
    <>
      <h1>ManageBook from here </h1>
      <p>&copy; Jayesh Shimpi</p>
      <div>
        <Link style={mystyle} to="/">
          Go back to home
        </Link>
      </div>
      <h2>List of Book here</h2>

      <ol style={mystyle}>{listItems}</ol>
    </>
  );
};

export default ManageBook;
