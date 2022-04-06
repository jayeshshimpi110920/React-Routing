import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Componenet/Home";
import AddBook from "./Componenet/AddBook";
import ManageBook from "./Componenet/ManageBook";
import BookDetails1 from "./Componenet/BookDetails1";

export default function App() {
  const numbers = [
    "Wings of Fire",
    "The Road Ahead",
    "Amazon Unbound: Jeff Bezos"
  ];
  const sss = {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    border: "1px solid black"
  };
  return (
    <div style={sss} className="App">
      <>
        <Routes>
          <Route path="/" element={<Home numbers={numbers} />}></Route>
          <Route
            path="/add-books"
            element={<AddBook mylist={numbers} />}
          ></Route>
          <Route
            path="/manage-books"
            element={<ManageBook numbers={numbers} />}
          ></Route>
          <Route path="/manage-books/1" element={<BookDetails1 />}></Route>
        </Routes>
      </>
    </div>
  );
}
