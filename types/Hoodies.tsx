export type Hoodies = {
   blueprint_id: number;
   id: string;
   title: string;
   variants: [
      {
         cost: number;
         quantity: number;
         price: number;
         is_enabled: boolean;
      }
   ];
   images: [
      {
         src: string;
         is_default: boolean;
      }
   ];
};
