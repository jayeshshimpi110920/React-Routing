import React from "react";
import { Link } from "react-router-dom";

const AddBook = (props) => {
  // console.log(props);
  // console.log(props.mylist);

  const onTrigger = (event) => {
    this.props.parentCallback(event.target.myname.value);
    event.preventDefault();
  };
  const stylee = {
    textAlign: "left"
  };

  const mystyle = {
    color: "red"
  };

  const initialList = [];
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name });
    setList(newList);
    props.mylist.push(name);
  }

  return (
    <>
      <div>
        <h2>Add Book from here</h2>
        <p>&copy; Jayesh Shimpi</p>
        <div>
          <form onSubmit={onTrigger}>
            <input
              name="myname"
              type="text"
              value={name}
              onChange={handleChange}
            />
            <button type="button" data={initialList} onClick={handleAdd}>
              Add
            </button>
          </form>

          <div>
            <Link style={mystyle} to="/">
              Go back to home
            </Link>
          </div>
        </div>

        <ul style={stylee}>
          {list.map((item) => (
            <li key={item.id}>{item.name} --> done Added</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AddBook;
