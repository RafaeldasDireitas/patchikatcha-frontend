import { ProductType } from "./ProductType";

export type NewProductsType = {
   current_page: number;
   data: ProductType[];
   first_page_url: string;
};
