import { UI } from "@peasy-lib/peasy-ui";

export type ButtonState = {
  buttonText: string;
  className: string;
  buttonClickHandler: (event: Event, model: any, elem: HTMLElement) => void;
};

export class Button {
  // HTML template
  // this is the HTML that get's rendered for the component - required for Peasy-UI components
  public static template = `
    <style>
      .button_Component {
          font-size: 1em;
          border-radius: 10px;
          border: 0px;
          width: 60px;
          height: 25px;
          margin: 5px;
          font-weight: bold;
          color: #111111;
          background-color: whitesmoke;
      }

      .button_Component:active {
        -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
        -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
        box-shadow: inset 0px 0px 5px #c1c1c1;
        outline: none;
      }

      .up {
        color: whitesmoke;
        background-color: green;
      }

      .down {
        color: whitesmoke;
        background-color: red;
      }
      
    </style>
    <button class="button_Component \${className}"  \${click@=>buttonClickHandler}">\${buttonText}</button>
  `;

  // constructor that also defines the component state variables by the public keyword
  constructor(
    public buttonText: string,
    public className: string,
    public buttonClickHandler: (event: Event, model: any, elem: HTMLElement) => void
  ) {}

  // static method that creates an instance of the class - required for Peasy-UI components
  static create(state: ButtonState) {
    return new Button(state.buttonText, state.className, state.buttonClickHandler);
  }
}
