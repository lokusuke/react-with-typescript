import { useState } from "react";
import { UserList } from "./UserList";
import { PostList } from "./PostList";

export const Toggle = () => {
  // リテラル型で特定の文字列のみ許可
  type toggleString = "postList" | "userList";

  const [toggle, setToggle] = useState<toggleString>("userList");

  return (
    <div className="container items-center">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio1"
          autoComplete="off"
          checked={toggle === "userList"}
          onChange={() => setToggle("userList")}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">
          ユーザー一覧
        </label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio2"
          autoComplete="off"
          checked={toggle === "postList"}
          onChange={() => setToggle("postList")}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">
          投稿一覧
        </label>
      </div>
      {toggle === "userList" ? <UserList /> : <PostList />}
    </div>
  );
};
