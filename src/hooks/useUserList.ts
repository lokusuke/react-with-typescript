import axios from "axios";
import { useEffect, useState } from "react";

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const useUserList = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserList(res.data))
      .catch((error) => setErrorMessage(error.message));
  }, []);

  return { userList, userName, setUserName, errorMessage };
};
