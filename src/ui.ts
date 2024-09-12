import { Button, ButtonState } from "./components/button";
import { Label, LabelState } from "./components/label";

export const model = {
  Label,
  Button,
  labelInstance: undefined as Label | undefined,
  counterState: { count: 0, className: "" } as LabelState,
  upButtonState: {
    buttonText: "Up",
    className: "up",
    buttonClickHandler: (event: Event, model: any, elem: HTMLElement, attribute: any, object: any) => {
      increment();
    },
  } as ButtonState,
  downButtonState: {
    buttonText: "Down",
    className: "down",
    buttonClickHandler: (event: Event, model: any, elem: HTMLElement, attribute: any, object: any) => {
      decrement();
    },
  } as ButtonState,
};

function increment() {
  //@ts-expect-error
  model.labelInstance?.model.increment();
}

function decrement() {
  //@ts-expect-error
  model.labelInstance?.model.decrement();
}

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
            border: 1px solid whitesmoke;
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
          <\${Label:labelInstance === counterState}>
        </div>
       
        <div class="button_container">
          <\${Button === upButtonState}>
          <\${Button === downButtonState}>
        </div>
    </div>
</div>`;
