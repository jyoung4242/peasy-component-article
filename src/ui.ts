/*
  Importing UI components here
*/

import { Button, ButtonState } from "./components/button";
import { Label, LabelState } from "./components/label";

/*
  Defining the data model which serves as Peasy-UI State
*/
export const model = {
  Label, // adding the component Classes into the data model
  Button,

  labelInstance: undefined as Label | undefined, // this is the assigned 'instance' of the Label component

  // This is the state 'props' that are passed into the Label component
  counterState: { count: 0, className: "" } as LabelState,

  // This is the state 'props' that are passed into the Button Components, one for each instance used
  upButtonState: {
    buttonText: "Up",
    className: "up",
    buttonClickHandler: () => {
      increment();
    },
  } as ButtonState,
  downButtonState: {
    buttonText: "Down",
    className: "down",
    buttonClickHandler: () => {
      decrement();
    },
  } as ButtonState,
};

/*
  HTML template which is string literal representing what gets rendered by Peasy-UI
*/

export const template = `
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
          <\${Label:labelInstance === counterState}>
        </div>
       
        <div class="button_container">
          <!-- Creating two instances of the Peasy-UI Components here for buttons-->
          <\${Button === upButtonState}>
          <\${Button === downButtonState}>
        </div>
    
    </div>
</div>`;

/*
  Utility functions that let me access the data model after instantiation
*/

function increment() {
  //@ts-expect-error
  model.labelInstance?.model.increment();
}

function decrement() {
  //@ts-expect-error
  model.labelInstance?.model.decrement();
}
