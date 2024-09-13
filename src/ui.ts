/*
  Importing UI components here
*/

import { UIView } from "@peasy-lib/peasy-ui";
import { Button, ButtonState } from "./components/button";
import { Label, LabelState } from "./components/label";

// This is the class that will be instantiated by Peasy-UI
export class AppUI {
  public static template = `
    <div>
      <style>
        .container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 100px;
            padding: 10px;
            border: 2px solid whitesmoke;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .button_container {
            gap: 5px;
            display: flex;
            flex-direction: row;
        }
      </style>

      <div class="container">

        <div class="label_container">
          <!-- Using the Peasy-UI Component here for a Label-->
          <\${Label:labelView === counterState}>
        </div>
      
        <div class="button_container">
          <!-- Creating two instances of the Peasy-UI Components here for buttons-->
          <\${Button === upButtonState}>
          <\${Button === downButtonState}>
        </div>
      
      </div>
    </div>`;

  public Label = Label;
  public Button = Button;

  public labelView: UIView | undefined;

  // This is the state that is passed into the Label component
  public counterState: LabelState = { count: 0, className: "" };

  // These are the states that are passed into the Button Components, one for each instance used
  public upButtonState: ButtonState = {
    buttonText: "Up",
    className: "up",
    buttonClickHandler: () => this.labelView!.model.increment(),
  };
  public downButtonState: ButtonState = {
    buttonText: "Down",
    className: "down",
    buttonClickHandler: () => this.labelView!.model.decrement(),
  };
}
