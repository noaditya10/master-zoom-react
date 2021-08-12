import logo from "./logo.svg";
import "./App.css";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hello from "./components/Hello";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([{ _id: 1, judul: "Laskar Pelangi", stok: 7 }]);
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/hello">
            <Hello />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku bookList={books} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
