export type ProductDataType = {
   id: number;
   title: string;
   description: string;
   tags: string[];
   options: [
      {
         name: string;
         type: string;
         values: [
            {
               id: number;
               title: string;
            }
         ];
      },
      {
         name: string;
         type: string;
         values: [
            {
               id: number;
               title: string;
               colors: [string[]];
            }
         ];
      }
   ];
   variants: [
      {
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
      }
   ];
   images: [
      {
         src: string;
         variant_ids: number[];
         position: string;
         is_default: boolean;
         is_selected_for_publishing: boolean;
         order: number | null;
      }
   ];
   created_at: string;
   updated_at: string;
   visible: boolean;
   is_locked: boolean;
   blueprint_id: number;
   user_id: number;
   shop_id: number;
   print_provider_id: number;
   print_areas: [
      {
         variant_ids: number[];
         placeholders: [
            {
               position: string;
               images: any[];
            },
            {
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
            }
         ];
      }
   ];
   print_details: any[];
   sales_channel_properties: any[];
   is_printify_express_eligible: boolean;
   is_printify_express_enabled: boolean;
   is_economy_shipping_eligible: boolean;
   is_economy_shipping_enabled: boolean;
};
