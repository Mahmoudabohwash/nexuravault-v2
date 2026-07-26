import { creator } from "../../../Utils.js";
import { sidebarData } from "../../Data/Sidebardata.js";
import { sidebarlogo } from "./logo.js";
import { sidebarNavgation } from "./NavLinks.js";
import { sidebarfooter } from "./sidfooter.js";
export function Sidebar() {
  const sidebar = creator("div", "sidebar")

  sidebar.append(
    sidebarlogo(),
    sidebarNavgation(),
    sidebarfooter()
  )
  return sidebar;
}
