import { useEffect } from "react";
import { usersAPI } from "./services/api/users";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const users = await usersAPI.getUsers();
      console.log(users);
      return users;
    };
    fetchData();
  }, []);
  return <div className="text-red-600">Hello</div>;
}

export default App;
