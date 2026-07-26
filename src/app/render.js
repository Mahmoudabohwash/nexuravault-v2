import { creator } from "../../Utils.js";
import { Cards } from "../Components/Content/card.js";
import { pageorder } from "../Components/Content/Orders/PageOrder.js";
import { ProductPage } from "../Components/Content/products/propage.js";

let currentPage = "Dashboard";

export function setPage(pageName) {
    currentPage = pageName; 
}

export function renderPage() {

    switch (currentPage) {

        case "Dashboard":
            return Cards()
        case "Orders":
            return pageorder()
        case "Products":
            return ProductPage()
        case "Customers":
            return creator("div", "customers", `<h1> Coming Soon 🚧 </h1>`);
        case "Analytics":
            return creator("div", "analytics", `<h1> Coming Soon 🚧 </h1>`);

        default:
            console.log("مش موجود", currentPage)
            return Cards();
    } 

} 