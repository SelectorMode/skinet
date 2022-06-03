import { IProduct } from "./product";

export module Pagination{

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProduct[];
}
}