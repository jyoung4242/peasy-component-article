import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { AppUI, model, template } from "./ui";

// Peasy-UI method for creating a View and attaching to DOM
UI.create(document.body, new AppUI(), AppUI.template);
