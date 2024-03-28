export type ShippingRateType = {
   handling_time: {
      value: number;
      unit: string;
   };
   profiles: Profiles[];
};

type Profiles = {
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
