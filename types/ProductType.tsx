import { ProductDataType } from "./ProductDataType";

export type ProductType = {
   current_page: number;
   data: ProductDataType[];
   first_page_url: string;
};
