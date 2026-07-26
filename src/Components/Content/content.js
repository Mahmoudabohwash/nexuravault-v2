import {creator} from"../../../Utils.js";
import { Cards } from "./card.js";
import { ProductPage } from "./products/propage.js";
import { pageorder } from "./Orders/PageOrder.js";
export function content(){
const content = creator("div" , "prostyle");
content.append(
    Cards()
)
 
return content;
}