/* eslint-disable no-unused-vars */
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers.js";

import { getOrder } from "../../services/apiRestaurant.js";
import { use } from "react";
import { useLoaderData } from "react-router-dom";

function Order() {
  const order = useLoaderData();

  const { orderPrice, priority, priorityPrice, estimatedDelivery } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>
        <div>
          {priority && <span>Priority</span>}
          <span>Order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
