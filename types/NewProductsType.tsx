import { ProductDataType } from "./ProductDataType";

export type NewProductsType = {
   id: string;
   title: string;
   tags: string[];
   current_page: number;
   data: ProductDataType[];
   first_page_url: string;
   from: number;
   last_page: number;
   label: string;
   url: string;
   images: ImagesType[];
   variants: VariantsType[];
};

type VariantsType = {
   id: number;
   sku: string;
   cost: number;
   price: number;
   title: string;
   grams: number;
   is_enabled: boolean;
   is_default: boolean;
   is_available: boolean;
   is_printify_express_eligible: boolean;
   options: number[];
   quantity: number;
   variant_ids: number[];
};

type ImagesType = {
   src: string;
   variant_ids: number[];
   position: string;
   is_default: boolean;
   is_selected_for_publishing: boolean;
   order: boolean;
};
