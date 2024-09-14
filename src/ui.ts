/*
  Importing UI components here
*/

import { Label, LabelState } from "./components/label";
import { Button, ButtonState } from "./components/button";

import { UI, UIView } from "@peasy-lib/peasy-ui";

UI.register("Button", Button);
UI.register("Label", Label);

//new AppUI class architecture

export class AppUI {
  public static template = `
<div>
    <div class="container">
        
        <div class="label_container">
          <!-- Using the Peasy-UI Component here for a Label-->
          <\${Label:labelInstance === counterState}>
        </div>
        
        <div class="button_container">
          <!-- Creating two instances of the Peasy-UI Components here for buttons-->
          <\${Button === upButtonState}>
          <\${Button === downButtonState}>
        </div>
    
    </div>
</div>`;

  labelInstance: UIView | undefined = undefined; // this is the assigned 'instance' of the Label component

  // This is the state 'props' that are passed into the Label component
  counterState: LabelState = { count: 0, className: "" };

  upButtonState: ButtonState = {
    buttonText: "Up",
    className: "up",
    buttonClickHandler: () => {
      this.labelInstance!.model.increment();
    },
  };

  downButtonState: ButtonState = {
    buttonText: "Down",
    className: "down",
    buttonClickHandler: () => {
      this.labelInstance!.model.decrement();
    },
  };
}
