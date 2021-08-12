import logo from "./logo.svg";
import "./App.css";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ManajemenBuku />
    </div>
  );
}

export default App;
