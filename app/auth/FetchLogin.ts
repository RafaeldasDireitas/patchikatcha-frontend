import { endpoints } from "@/endpoints/endpoints";
import { toast } from "sonner";
import { CartType } from "@/types/CartType";

export default async function FetchLogin({ userData, setUserId, setJwtToken, setIsAuthenticated, setUserEmail, setCart }: any) {
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
      const responseData = await createUser.json();
      toast.success("You successfuly logged in!");
      setJwtToken(responseData.jwtToken);
      setUserId(responseData.userId);
      setIsAuthenticated(true);
      setUserEmail(userData.email);

      // const grabUserCart = await fetch(endpoints.url + endpoints.grabUserCart(responseData.userId), {
      //    method: "GET",
      //    headers: {
      //       "Content-type": "application/json"
      //    }
      // });

      // const grabUserCartJson: CartType[] = await grabUserCart.json();
      // console.log(grabUserCartJson);
      // setCart("");
      // setCart(grabUserCartJson);
   }
}
