import Link from "next/link";

export default function Order({ printifyUrl, orderId, createdAt, status, address }: any) {
   return (
      <>
         <div className="bg-body-background text-light rounded-xl">
            <div className="flex flex-col p-2">
               <div className="flex flex-col text-center mx-2">
                  <h1>Created at:</h1>
                  <p>{createdAt}</p>
               </div>

               <div className="flex flex-row text-center mx-2">
                  <h1>Id:</h1>
                  <p>&nbsp;{orderId}</p>
               </div>

               <div className="flex flex-row mx-2">
                  <h1>Status:</h1>
                  <p>&nbsp;{status}</p>
               </div>

               <div className="flex flex-row mx-2">
                  <h1>Address:</h1>
                  <p>&nbsp;{address}</p>
               </div>

               <div className="flex justify-center">
                  <Link href={`${printifyUrl}`} target="_blank">
                     <button className="btn mt-3 btn-circle quicksand-semibold bg-button-background hover:bg-button-focused hover:border-none border-border-light border-2 text-white hover:text-white w-64">Order details</button>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
}
