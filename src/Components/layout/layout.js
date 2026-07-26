import { creator } from "../../../Utils.js";
import { renderPage } from "../../app/render.js";
import { setPage } from "../../app/render.js";
import { setTrigger } from "../../Store/trigger.js";
import { content } from "../Content/content.js";
import { Sidebar } from "../Sidebar/sidebar.js";

export function sidhea() {
  const layout = creator("div", "layout");

  const sidebarElem = Sidebar();
  const contentElem = content();
  sidebarElem.addEventListener("click", (e) => {

    const btn = e.target.closest("button");
    if (!btn) return;

    setPage(btn.textContent.trim());
    contentElem.replaceChildren(renderPage());

  })
  setTrigger(() =>{
    contentElem.replaceChildren(renderPage())
  })


  layout.append(
    sidebarElem,
    contentElem
  );

  return layout;
}