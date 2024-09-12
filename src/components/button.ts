export type ButtonState = {
  buttonText: string;
  className: string;
  buttonClickHandler: (event: Event, model: any, elem: HTMLElement) => void;
  countReference: number;
};

export class Button {
  public static template = `
    <style>
      .button_Component {
          font-size: 1em;
          color: #111111;
          background-color: whitesmoke;
          border-radius: 10px;
          border: 0px;
          width: 60px;
          height: 25px;
          margin: 5px;
      }
    </style>
    <button class="button_Component \${className}"  \${click@=>buttonClickHandler}">\${buttonText}</button>
  `;

  constructor(
    public buttonText: string,
    public className: string,
    public buttonClickHandler: (event: Event, model: any, elem: HTMLElement) => void,
    public countReference: number
  ) {}

  static create(state: ButtonState) {
    return new Button(state.buttonText, state.className, state.buttonClickHandler, state.countReference);
  }
}
