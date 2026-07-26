import state from "../Store/state.js";
import { products } from "../Data/productData.js";
import { ordersData } from "../Data/Orders.js";
import { dashboardData } from "../Data/dashboard.js";

export function initApp() {

    state.dashboard = dashboardData;
    state.orders = ordersData;
    state.products = products;

}
