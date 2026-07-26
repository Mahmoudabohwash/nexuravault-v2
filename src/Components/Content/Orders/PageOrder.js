import { createTable } from "./Table.js";
import { ordersData } from "../../../Data/Orders.js";
import { Order } from "./Order.js";
import state from "../../../Store/state.js";
export function pageorder() {
  const container = Order()

  container.append(createTable(state))

  return container;

}
