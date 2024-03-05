export default async function FetchCreateCheckoutSession({ userEmail, checkoutObject, setClientSecret }: any) {
   const dataSession = await fetch(`https://localhost:7065/api/Stripe/create-checkout-session?userEmail=${userEmail}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(checkoutObject)
   });

   const data = await dataSession.json();
   setClientSecret(data);
}
