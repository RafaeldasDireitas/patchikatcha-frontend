type clientData = {
   clientSecret: string;
   clientId: string;
};

export default async function FetchCreateCheckoutSession({ userEmail, userId, setClientSecret, setClientId }: any) {
   const dataSession = await fetch(`https://localhost:7065/api/Stripe/create-checkout-session?userEmail=${userEmail}&userId=${userId}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify("")
   });

   const data: clientData = await dataSession.json();
   setClientSecret(data.clientSecret);
   setClientId(data.clientId);
}
