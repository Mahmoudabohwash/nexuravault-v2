import { creator } from "../../../../Utils.js";
import { createButton } from "../../Button/button.js";
//الكارت الواحد
export function createproductCard(item) {

    const card = creator("div", "cardstyle")
    const action = creator("div", "Actionstyle")
    const title = creator("h3");
    title.textContent = item.name;

    const price = creator("p");
    price.textContent = item.price;

    const editBtn = 
    createButton("Edit" , 'تعديل');

    const deletBtn = 
    createButton("Delete", 'حذف');

action.append(
    editBtn,
    deletBtn
);


    card.append(
        title,
        price,
        action

    );

    return card;
}