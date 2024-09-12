import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { model, template } from "./ui";

UI.create(document.body, model, template);

console.log(model);
