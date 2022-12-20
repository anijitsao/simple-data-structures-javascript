import React, { useState } from "react";
import "./style.css";
import { useService } from "./useServiceHook.js";

export default function App() {
  const [data, fetchData] = useService();
  const [users, setUsers] = useState([]);

  console.log("data, fetchdata", data, fetchData);

  const fetchDataByHook = async () => {
    const users = await fetchData("https://jsonplaceholder.typicode.com/users");
    console.log("data received from Hook", users);
    setUsers(users);
  };

  // fetchDataByHook();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => fetchDataByHook()}>Fetch</button>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}
