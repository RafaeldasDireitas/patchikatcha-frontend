export default function IsNotAuthenticated() {
   setTimeout(() => {
      window.location.href = "/auth";
   }, 5000);
   return (
      <>
         <div className="flex min-h-screen items-center justify-center">
            <h1>You must be logged in!</h1>
         </div>
      </>
   );
}
