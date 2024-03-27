import { ProductDataType } from "./ProductDataType";

export type NewProductsType = {
   current_page: number;
   data: Data[];
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

type Data = {
   id: string;
   title: string;
   blueprint_id: number;
   created_at: Date;
   description: string;
   images: [
      {
         is_default: boolean;
         is_selected_for_publishing: boolean;
         order: null;
         position: string;
         src: string;
      }
   ];
   is_economy_shipping_eligible: boolean;
   is_economy_shipping_enabled: boolean;
   is_locked: boolean;
   is_printify_express_eligible: boolean;
   is_printify_express_enabled: boolean;
   options: [
      {
         name: string;
         type: string;
         values: [
            {
               colors: string[];
               id: number;
               title: string;
            }
         ];
      }
   ];
   print_areas: [
      {
         font_color: string;
         font_family: string;
         placeholders: [
            {
               images: [];
               position: string;
            }
         ];
         variant_ids: number[];
      }
   ];
   tags: string[];
   variants: [
      {
         cost: number;
         grams: number;
         id: number;
         is_available: boolean;
         is_default: boolean;
         is_enabled: boolean;
         is_printify_express_eligible: boolean;
         options: number[];
         price: number;
         quantity: number;
         sku: string;
         title: string;
      }
   ];
};
