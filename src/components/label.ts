import { UI } from "@peasy-lib/peasy-ui";

export type LabelState = {
  count: number;
  className: string;
};

export class Label {
  // HTML template
  // this is the HTML that get's rendered for the component - required for Peasy-UI components
  public static template = `
    <style>
      .label_Component {
          font-size: 3em;
          color: whitesmoke;
      }
    </style>
    <div class="label_Component \${className}">\${count}</div>
  `;

  // internal method that manipulates state
  increment = () => {
    this.count++;
  };

  // internal method that manipulates state
  decrement = () => {
    if (this.count > 0) this.count--;
  };

  // constructor that also defines the component state variables by the public keyword
  constructor(public count: number, public className: string) {}

  // static method that creates an instance of the class - required for Peasy-UI components
  static create(state: LabelState) {
    return new Label(state.count, state.className);
  }
}
