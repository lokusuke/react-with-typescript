import { usePostList, type Post } from "../hooks/usePostList";
import type { Column } from "./common/columnConfig";
import { CustomTable } from "./CustomTable";

export const PostList = () => {
  const { searchText, setSearchText, postList, errorMessage } = usePostList();

  const postColumnList: Column<Post>[] = [
    { label: "id", key: "id" },
    { label: "ユーザーid", key: "userId" },
    { label: "タイトル", key: "title" },
    { label: "内容", key: "body" },
  ];

  // 入力欄に文字が入力されたらその文字を含む名前だけを抽出
  const filterPosts = postList.filter((post) => post.body.includes(searchText));

  return (
    <div>
      <p>投稿一覧</p>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <CustomTable
        columnList={postColumnList}
        data={filterPosts}
        errorMessage={errorMessage}
      />
    </div>
  );
};
