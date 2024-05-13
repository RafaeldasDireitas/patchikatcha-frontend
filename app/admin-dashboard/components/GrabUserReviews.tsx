"use client";
import { useState } from "react";
import FetchUserReviews from "../FetchUserReviews";
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
            <table className="table-auto table-lg">
               <thead>
                  <tr>
                     <th>Id</th>
                     <th>Review Title</th>
                     <th>Comment</th>
                     <th>Rating</th>
                     <th>Created At</th>
                     <th>Username</th>
                  </tr>
               </thead>
               <tbody>
                  {userReviews?.map((userReview) => (
                     <tr>
                        <td>{userReview.id}</td>
                        <td>{userReview.title}</td>
                        <td dangerouslySetInnerHTML={{ __html: userReview.comment }}></td> <td>{userReview.rating}</td>
                        <td>{new Date(userReview.createdAt).toLocaleDateString()}</td>
                        <td>{userReview.username}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}
      </>
   );
}
