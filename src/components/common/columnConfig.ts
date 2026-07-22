import type { ReactNode } from "react";

export type Column<T> = {
  label: string;
  key: keyof T;
  render?: (data: T) => ReactNode;
};
