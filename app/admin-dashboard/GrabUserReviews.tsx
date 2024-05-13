"use client";
import { useState } from "react";
import FetchUserReviews from "./FetchUserReviews";
import { ReviewType } from "@/types/ReviewType";

export default function GrabUserReviews() {
   const [userId, setUserId] = useState("");
   const [hasReviews, setHasReviews] = useState(false);
   const [userReviews, setUserReviews] = useState<ReviewType[]>();

   const handleUserId = (e: any) => {
      const userId = e.target.value;
      setUserId(userId);
   };

   const findReviews = async () => {
      await FetchUserReviews({ setHasReviews, userId, setUserReviews });
   };

   const user = "934e097f-c862-48cf-891c-c78b4237ae4c";

   return (
      <>
         <h1 className="my-1 text-xl">Grab user reviews</h1>
         <input
            type="text"
            onChange={handleUserId}
            value={userId}
            placeholder="User Id"
            className="input input-bordered input-warning w-full max-w-xs my-1 bg-white"
            id="publish"
         />
         <button className="btn btn-circle w-60 bg-button-background hover:bg-button-focused text-white my-1 border-none" onClick={findReviews}>
            Find reviews
         </button>
         {hasReviews && (
            <table className="table-auto table-lg border">
               <thead>
                  <tr className="border">
                     <th className="border">Id</th>
                     <th className="border">Review Title</th>
                     <th className="border">Comment</th>
                     <th className="border">Rating</th>
                     <th className="border">Created At</th>
                  </tr>
               </thead>
               <tbody>
                  {userReviews?.map((userReview) => (
                     <tr className="border">
                        <td className="border">{userReview.id}</td>
                        <td className="border">{userReview.title}</td>
                        <td className="border" dangerouslySetInnerHTML={{ __html: userReview.comment }}></td> <td>{userReview.rating}</td>
                        <td className="border">{new Date(userReview.createdAt).toLocaleDateString()}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </>
   );
}
