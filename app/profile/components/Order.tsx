import Link from "next/link";

export default function Order({ printifyUrl, orderId, createdAt, status, address, lineItems }: any) {
   console.log(lineItems);
   const firstItem = lineItems[0].metadata.title;

   return (
      <div className="bg-body-background text-light rounded-xl">
         <div className="flex flex-col p-2 gap-y-1">
            <div className="flex flex-row mx-2">
               <p className="quicksand-bold">
                  {firstItem} {lineItems.length > 1 ? ` + ${lineItems.length - 1} items` : ""}
               </p>
            </div>

            <div className="flex flex-col mx-2 quicksand-medium">
               <h1>Created on: {createdAt}</h1>
               <p></p>
            </div>

            <div className="flex flex-row mx-2">
               <h1>Status:</h1>
               <p>&nbsp;{status}</p>
            </div>

            <div className="flex flex-row text-center mx-2">
               <h1>Id:</h1>
               <p>&nbsp;{orderId}</p>
            </div>

            {/* <div className="flex flex-row mx-2">
               <h1>Address:</h1>
               <p>&nbsp;{address}</p>
            </div> */}

            <div className="flex justify-center">
               <Link href={`${printifyUrl}`} target="_blank">
                  <button className="btn btn-circle my-2 quicksand-semibold bg-button-background hover:bg-button-focused hover:border-none border-border-light border-2 text-white hover:text-white lg:w-64 w-36">
                     Order details
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}
