   import { creator } from "../../../Utils.js";
   import { dashboardData } from "../../Data/dashboard.js";
import state from "../../Store/state.js";
     
    export function Cards(){
      const cards = creator("div" ,"cards")
    state.dashboard.forEach(item => {
    const card = creator("div" , "card");
    const title = creator ("h3");
    title.textContent = `${item.title}`; 

    const value = creator("p" ,"value");
    value.textContent =`${item.value}`
    
    const  change =creator("span" , "span");
    change.textContent=`${item.change}`
    
    
    card.append(title)
    card.append(value)
    card.append(change)
    cards.append(card)
   });
     return cards;

    }