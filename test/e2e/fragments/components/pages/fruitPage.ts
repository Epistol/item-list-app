import { t, Selector } from "testcafe";

export default class FruitPage {
  fruitTitle: Selector;

  constructor() {
    this.fruitTitle = Selector('[data-test="fruit-title"]');
  }
}
