export type LabelState = {
  count: number;
  className: string;
};

export class Label {
  public static template = `
    <style>
      .label_Component {
          font-size: 3em;
          color: whitesmoke;
      }
    </style>
    <div class="label_Component \${className}">\${count}</div>
  `;

  increment = () => {
    this.count++;
  };

  decrement = () => {
    if (this.count > 0) this.count--;
  };

  constructor(public count: number, public className: string) {}

  static create(state: LabelState) {
    return new Label(state.count, state.className);
  }
}
