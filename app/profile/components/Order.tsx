export default function Order({ orderId, createdAt, totalPrice, status, address }: any) {
   return (
      <>
         <div className="p-8 w-1/3 bg-button-focused text-white rounded-xl">
            <div className="flex flex-row">
               <div className="flex flex-col mx-2">
                  <h1>Created at:</h1>
                  <p>{createdAt}</p>
               </div>

               <div className="flex flex-col mx-2">
                  <h1>Total:</h1>
                  <p>{totalPrice}</p>
               </div>

               <div className="flex flex-col mx-2">
                  <h1>Status:</h1>
                  <p>{status}</p>
               </div>

               <div className="flex flex-col mx-2">
                  <h1>Address:</h1>
                  <p>{address}</p>
               </div>
            </div>
         </div>
      </>
   );
}
