export type ProductType = {
   id: string;
   title: string;
   description: string;
   tags: string[];
   options: OptionsType[];
   name: string;
   type: string;
   values: ValuesType[];
   variants: VariantsType[];
   images: ImagesType[];
   created_at: string;
   updated_at: string;
   visible: boolean;
   is_locked: boolean;
   external: ExternalType;
   blueprint_id: number;
   user_id: number;
   shop_id: number;
   print_provider_id: number;
   placeholders: PlaceHoldersType[];
   print_details: [];
   sales_channel_properties: [];
   is_printify_express_eligible: boolean;
   is_printify_express_enabled: boolean;
   is_economy_shipping_eligible: boolean;
   is_economy_shipping_enabled: boolean;
};

type OptionsType = {
   name: string;
   type: string;
   values: [
      {
         id: number;
         title: string;
         colors: string[];
      }
   ];
};

type ValuesType = {
   id: number;
   title: string;
};

export type VariantsType = {
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

type ExternalType = {
   id: string;
   handle: string;
};

type PlaceHoldersType = {
   position: string;
   images: [
      {
         id: string;
         name: string;
         type: string;
         height: number;
         width: number;
         x: number;
         y: number;
         scale: number;
         angle: number;
      }
   ];
};
