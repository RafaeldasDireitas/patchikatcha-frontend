import { ProductDataType } from "./ProductDataType";

export type MenProductsType = {
   current_page: number;
   data: ProductDataType[];
   first_page_url: string;
   from: number;
   last_page: number;
   last_page_url: string;
   links: Links[];
   next_page_url: string;
   path: string;
   per_page: number;
   prev_page_url: string;
   to: number;
   total: number;
};

type Links = {
   active: boolean;
   label: string;
   url: string;
};
