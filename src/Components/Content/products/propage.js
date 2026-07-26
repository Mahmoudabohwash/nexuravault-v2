import state from "../../../Store/state.js";
import { createproductCard } from "./cards.js";
import { product } from "./product.js";
//الصفحه كلها 
   export function ProductPage(){
   const container = product();
   const fragment = document.createDocumentFragment();
   state.products.forEach(item => {
   fragment.append(createproductCard(item));
});
   container.append(fragment);
   return container;
   }