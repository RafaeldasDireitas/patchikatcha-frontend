export type OrderType = {
   address_to: AddressTo;
   created_at: Date;
   fulfillment_type: string;
   id: string;
   line_items: LineItems[];
   metadata: MetaData;
   printify_connect: PrintifyConnect;
   shipping_method: number;
   shop_id: number;
   status: string;
   total_price: number;
   total_shipping: number;
   total_tax: number;
};

type AddressTo = {
   address1: string;
   address2: string;
   city: string;
   company: string;
   country: string;
   email: string;
   first_name: string;
   last_name: string;
   phone: string;
   region: string;
   zip: string;
};

type LineItems = {
   cost: number;
   id: string;
   metadata: {
      country: string;
      price: number;
      sku: string;
      title: string;
      variant_label: string;
   };
   print_provider_id: string;
   quantity: number;
   shipping_cost: number;
   status: string;
   variant_id: number;
};

type MetaData = {
   order_type: string;
   shop_order_id: string;
   shop_order_label: string;
};

type PrintifyConnect = {
   id: string;
   url: string;
};
