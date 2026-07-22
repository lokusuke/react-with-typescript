import { useUserList, type User } from "../hooks/useUserList";
import type { Column } from "./common/columnConfig";
import { CustomTable } from "./CustomTable";

export const UserList = () => {
  const { userList, userName, setUserName, errorMessage } = useUserList();

  const userColumnList: Column<User>[] = [
    { label: "id", key: "id" },
    { label: "名前", key: "name" },
    { label: "メールアドレス", key: "email" },
  ];

  // 入力欄に文字が入力されたらその文字を含む名前だけを抽出
  const filterUsers = userList.filter((user) => user.name.includes(userName));

  return (
    <div>
      <p>ユーザー検索</p>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <CustomTable
        columnList={userColumnList}
        data={filterUsers}
        errorMessage={errorMessage}
      />
    </div>
  );
};
