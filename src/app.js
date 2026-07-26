import { Header } from "./Components/Header/header.js";
import { Sidebar } from "./Components/Sidebar/sidebar.js";
import { sidhea } from "./Components/layout/layout.js";
import { initApp } from "./app/init.js";
import state from "./Store/state.js";
initApp()
const app = document.createElement("div");
app.id = "app-style";
app.append(
    Header(),
    sidhea()   
    
    
);


document.body.appendChild(app);


