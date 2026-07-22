import type { Post } from "../hooks/usePostList";
import type { User } from "../hooks/useUserList";
import type { Column } from "./common/columnConfig";

type Props<T> = {
  columnList: Column<T>[];
  errorMessage: string;
  data: T[];
};

export const CustomTable = <T extends User | Post>({
  columnList,
  errorMessage,
  data,
}: Props<T>) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columnList.map((column) => (
            <th scope="col" key={column.label}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {errorMessage !== "" ? (
          <tr>
            <td>
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            </td>
          </tr>
        ) : (
          data.map((d) => (
            <tr key={d.id}>
              {columnList.map((column) => (
                <td scope="col" key={column.label}>
                  {String(d[column.key])}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
