export default async function FetchSessionStatus({ clientId }: any) {
   const grabSessionStatus = await fetch(`https://localhost:7065/api/Stripe/session-status?sessionId=${clientId}`, {
      method: "GET",
      headers: {
         "Content-type": "application/json"
      }
   });

   const sessionStatus = await grabSessionStatus.json();
}
