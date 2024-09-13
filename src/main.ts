import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { model, template } from "./ui";

// Peasy-UI method for creating a View and attaching to DOM
await UI.create(document.body, model, template).attached;
