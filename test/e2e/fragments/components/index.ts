import { Selector } from "testcafe";

export default class IndexPage {
  listItems: Selector;
  addButton: Selector;

  constructor() {
    this.listItems = Selector('[data-test="list-items"]');
    this.addButton = Selector('[data-test="add-button"]');
  }
}
