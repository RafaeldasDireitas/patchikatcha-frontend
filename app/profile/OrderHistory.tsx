import { OrderType } from "@/types/OrderType";
import Order from "./components/Order";

export default function OrderHistory({ orders }: { orders: OrderType[] }) {
   return (
      <div className="p-12 my-8 quicksand flex flex-col">
         <h1 className="text-2xl text-dark quicksand-bold lg:text-start text-center mb-2">Order history:</h1>
         <p className="quicksand-medium lg:text-start text-center mb-2">Your orders will be updated every 30 minutes.</p>
         <div className="gap-4 grid lg:grid-cols-3 grid-cols-1">
            {orders.map((order, key: number) => {
               const formattedDate = new Date(order.created_at).toLocaleDateString().split(" ")[0];
               const formattedPrice = (order.total_price / 100).toFixed(2) + " €";
               const status = order.status;
               const address = order.address_to.address1;

               return (
                  <>
                     <div key={key + key}>
                        <Order
                           printifyUrl={order.printify_connect.url}
                           orderId={order.id}
                           createdAt={formattedDate}
                           totalPrice={formattedPrice}
                           status={status}
                           address={address}
                        ></Order>
                     </div>
                  </>
               );
            })}
         </div>
      </div>
   );
}
