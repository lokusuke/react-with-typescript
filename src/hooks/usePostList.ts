import axios from "axios";
import { useEffect, useState } from "react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const usePostList = () => {
  const [searchText, setSearchText] = useState("");
  const [postList, setPostList] = useState<Post[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPostList(res.data))
      .catch((error) => setErrorMessage(error.message));
  }, []);
  return { searchText, setSearchText, postList, errorMessage };
};
