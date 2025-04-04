export default function Quantity({
   quantity,
   width,
   decrementQuantity,
   incrementQuantity,
   isDecrementButtonDisabled,
   isIncrementButtonDisabled
}: any) {
   return (
      <div className="flex justify-center lg:justify-end m-2">
         <div className={`${width} rounded-xl flex items-center bg-button-background`}>
            <button
               className="flex items-center justify-start p-2 lg:hover:scale-110 duration-150 bg-button-focused rounded-l-xl"
               onClick={decrementQuantity}
               disabled={isDecrementButtonDisabled}
            >
               <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path d="M5 12h14" />
               </svg>
            </button>

            <div className="flex w-1/2 justify-center items-center">
               <h1 className="text-white ">{quantity}</h1>
            </div>

            <button
               className="flex items-center justify-start p-2 lg:hover:scale-110 duration-150 bg-button-focused rounded-r-xl"
               onClick={incrementQuantity}
               disabled={isIncrementButtonDisabled}
            >
               <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
               </svg>
            </button>
         </div>
      </div>
   );
}
