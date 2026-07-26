  import { creator } from "../../../Utils.js"; 
  import { headerData } from "../../Data/headerdata.js";


  export function Header() {
   
     const Headerdiv = creator("div" ,"Header-style");
    
     const h1 = creator("h1" , "h1-style" , headerData.title) ;

     const logo = creator("div" , "logo-style" , headerData.logo)

     const Search =creator("input" , "search-style" , headerData.Search)


     Headerdiv.append(logo) ;
     Headerdiv.append(h1) ;
     Headerdiv.append(Search) ;

     return Headerdiv ;
     
  }
