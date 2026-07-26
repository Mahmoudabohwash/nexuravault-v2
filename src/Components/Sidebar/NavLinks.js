  import { creator } from "../../../Utils.js";
import { sidebarData } from "../../Data/Sidebardata.js";

export function sidebarNavgation(){
    
  const sidebarNavgation = 
  creator("div" , "sidebarnavgation" );
  sidebarData.forEach(item => {
   const Navliks = creator("button"  , "Navliks");
   Navliks.textContent = `${item.title}`;

   sidebarNavgation.append(Navliks)
  })

  return sidebarNavgation;
}