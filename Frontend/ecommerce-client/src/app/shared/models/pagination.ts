import { IProduct } from "./product";

export interface IPagination {
  pageIndex: number;
  pageSize: number;
  count: number;
  data: IProduct[];
}

export class Pagination implements IPagination {
  pageIndex = 0;
  pageSize = 0;
  count = 0;
  data = [];
}
