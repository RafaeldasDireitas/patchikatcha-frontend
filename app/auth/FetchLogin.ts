import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";
import { CartType } from "@/types/CartType";

export default async function FetchLogin({ userData, setUserId, setJwtToken, setIsAuthenticated, setUserEmail, setCart, userCart, userCountry }: any) {
   const createUser = await fetch(endpoints.url + endpoints.login, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
   });

   if (!createUser.ok) {
      toast.error("Credentials are wrong, try again.");
   }

   if (createUser.ok) {
      const cart: any = [];

      userCart.forEach((item: CartType) => {
         const newCart = {
            name: item.name,
            description: item.description,
            basePrice: item.base_price,
            price: item.price,
            priceId: item.price_id,
            image: item.image,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            productId: item.product_id,
            variantId: item.variant_id,
            firstItem: item.first_item,
            additionalItems: item.additional_items,
            blueprintId: item.blueprint_id,
            printProviderId: item.print_provider_id
         };

         cart.push(newCart);
      });

      const responseData = await createUser.json();

      const grabUserCart = await fetch(endpoints.url + endpoints.grabUserCart(responseData.userId, userCountry), {
         method: "PUT",
         headers: {
            "Content-type": "application/json"
         },
         body: JSON.stringify(cart)
      });

      if (grabUserCart.ok) {
         const grabUserCartJson: [] = await grabUserCart.json();

         toast.success("You successfuly logged in!");
         setJwtToken(responseData.jwtToken);
         setUserId(responseData.userId);
         setIsAuthenticated(true);
         setUserEmail(userData.email);
         setCart(null);
         grabUserCartJson.map((cart) => setCart(cart));
      }
   }
}
