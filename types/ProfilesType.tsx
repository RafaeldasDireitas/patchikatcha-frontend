export type ProfilesType = {
   variant_ids: number[];
   first_item: {
      cost: number;
      currency: string;
   };
   additional_items: {
      cost: number;
      currency: string;
   };
   countries: string[];
};
