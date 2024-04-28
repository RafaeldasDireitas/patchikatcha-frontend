import { endpoints } from "@/endpoints/endpoints";

type clientData = {
   clientSecret: string;
   clientId: string;
};

export default async function FetchCreateCheckoutSession({ userId, jwtToken, setClientSecret, setClientId }: any) {
   const dataSession = await fetch(endpoints.url + endpoints.createCheckoutSession(userId), {
      method: "POST",
      headers: {
         "Content-type": "application/json",
         Authorization: `Bearer ${jwtToken}`
      },
      body: JSON.stringify("")
   });

   const data: clientData = await dataSession.json();
   setClientSecret(data.clientSecret);
   setClientId(data.clientId);
}
