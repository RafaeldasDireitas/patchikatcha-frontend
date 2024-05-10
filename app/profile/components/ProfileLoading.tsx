import Skeleton from "@/app/components/Skeleton";

export default function ProfileLoading() {
   return (
      <>
         <div className="flex lg:flex-row flex-col">
            <div className="p-12 my-8 lg:w-1/3">
               <h1 className="text-2xl text-light quicksand-bold lg:text-start text-center">Your Account</h1>
               <p className="quicksand-light lg:text-start text-center">Track your orders or change your settings</p>
               <div className="flex flex-row lg:text-start text-center lg:justify-start justify-center">
                  <Skeleton widthInPx={166.73} heightInPx={25} />
               </div>
               <div className="flex flex-row lg:text-start text-center lg:justify-start justify-center">
                  <Skeleton widthInPx={166.73} heightInPx={25} />
               </div>

               <div className="mt-10">
                  <h1 className="text-xl text-dark quicksand-bold lg:text-start text-center">My orders</h1>
                  <div className="p-4 quicksand-medium">
                     <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Order history</h2>
                     <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Help & Support</h2>
                  </div>
               </div>

               <div className="mt-4">
                  <h1 className="text-xl text-dark quicksand-bold lg:text-start text-center">Account settings</h1>
                  <div className="p-4 quicksand-medium">
                     <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Change personal details</h2>
                     <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Newsletter subscription</h2>
                     <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">Change country</h2>
                  </div>
               </div>

               <div className="mt-4">
                  <h1 className="text-xl text-dark quicksand-bold lg:text-start text-center">Additional settings</h1>
                  <div className="p-4 quicksand-medium">
                     <h2 className="hover:underline lg:text-start text-center hover:text-light hover:cursor-pointer">View reviews</h2>
                  </div>
               </div>

               <div className="flex flex-col">
                  <button className="btn mt-3 btn-circle quicksand-semibold bg-transparent hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                     Sign Out
                  </button>

                  <button className="btn mt-3 btn-circle bg-transparent quicksand-semibold hover:bg-button-focused hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                     Change Password
                  </button>

                  <button className="btn mt-3 btn-circle bg-transparent quicksand-semibold hover:bg-red-800 hover:border-none border-border-light border-2 text-light hover:text-white w-64">
                     Delete Account
                  </button>
               </div>
            </div>
            <div className="lg:w-2/3">
               <div className="p-12 my-8 quicksand flex flex-col">
                  <h1 className="text-2xl text-dark font-bold lg:text-start text-center mb-4">Order history:</h1>
                  <div className="gap-4 grid lg:grid-cols-3 grid-cols-1">
                     <Skeleton widthInPx={298} heightInPx={200} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
