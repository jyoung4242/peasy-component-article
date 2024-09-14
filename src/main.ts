import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { AppUI } from "./ui";

// Peasy-UI method for creating a View and attaching to DOM
await UI.create(document.body, new AppUI(), AppUI.template).attached;
