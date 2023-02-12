import "./App.css";
import UserList from "./UserList";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router";
import Desription from "./Desription";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (reponse) {
        setUsers(reponse.data);
        console.log(reponse.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={users.map((user, id) => (
            <UserList key={id} user={user} />
          ))}
        />
        <Route
          path="/allUser"
          element={users.map((user, id) => (
            <UserList key={id} user={user} />
          ))}
        />
        <Route path="/description" element={<Desription />}></Route>
      </Routes>
    </div>
  );
}

export default App;
