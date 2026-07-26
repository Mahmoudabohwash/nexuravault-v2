  import { creator } from "../../../Utils.js";
  import { footerdata } from "../../Data/Sidebardata.js";
  export function sidebarfooter() {
     
  const sidebarfooter = creator("div" , "sidebarfootar" );

  footerdata.forEach(item =>{
  const footer = creator("butten" , "btnfooter");
  footer.textContent = `${item.title}`;
   
  sidebarfooter.append(footer)
  })

  return sidebarfooter;
  }