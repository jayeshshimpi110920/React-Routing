import { Link } from "react-router-dom";

const ManageBook = (props) => {
  const btn = {
    color: "white",
    border: "1px solid black",
    backgroundColor: "grey",
    margin: "20px"
  };
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li>
      {number}
      <Link style={btn} to="/manage-books/1" data={{ number }}>
        {" "}
        Manage
      </Link>
    </li>
  ));

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
      <h1>ManageBook from here </h1>
      <p>&copy; Jayesh Shimpi</p>
      <div>
        <Link style={mystyle} to="/">
          Go back to home
        </Link>
      </div>
      <h2>List of Book here</h2>
      {/* <ol style={mystyle}>
          {props.questionList.map((question) => {
            return <li>{this.question.item}</li>;
          })}
        </ol>  */}
      <ol style={mystyle}>{listItems}</ol>
    </>
  );
};

export default ManageBook;

// return (

// );

// const ManageBook = (props) => {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => <li>{number}</li>);

//   const mystyle = {
//     color: "red"
//   };
//   return (
//     <>
//       <h1>ManageBook from here </h1>
//       <div>
//         <Link style={mystyle} to="/">
//           Go back to home
//         </Link>
//       </div>
//       <div>
//         <ol style={mystyle}>{listItems}</ol>
//       </div>
//     </>
//   );
// };

// export default ManageBook;
