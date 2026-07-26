import { creator } from "../../../../Utils.js";
import { ordersData } from "../../../Data/Orders.js";
import state from "../../../Store/state.js";
export function createTable(state) {
    const table = creator('table', 'tablestyle')
    const thead = creator('thead');
    const trhead = creator('tr');

    const keys = Object.keys(state.orders[0]);
    keys.forEach(key => {
        const th = creator('th');
        th.textContent = key;
        trhead.append(th);
    });
    thead.append(trhead);

    const tbody = creator("tbody");
    state.orders.forEach(order => {
        const tr = creator("tr");

        const values = Object.values(order);

        values.forEach(value => {
            const td = creator("td");
            td.textContent = value;

            tr.append(td);

        })
        tbody.append(tr);
    })
    table.append(
        thead,
        tbody
    )

    return table;
}
