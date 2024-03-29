import logo from "./logo.svg";
import "./App.css";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hello from "./components/Hello";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([{ _id: 1, judul: "Laskar Pelangi", stok: 7 }]);

  function storeData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil ditambahkan!");
  }

  function updateData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil diperbarui!");
  }
  function removeData(inputBook) {
    console.log(inputBook);
    alert("Data berhasil dihapus!");
  }
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/hello">
            <Hello />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={removeData} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
