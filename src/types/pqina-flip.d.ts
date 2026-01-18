declare module '@pqina/flip' {
  export default class Tick {
    static DOM: {
      create(element: HTMLElement, options: any): any;
      destroy(tick: any): void;
    };
  }
}
