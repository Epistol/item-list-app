import { t, Selector } from "testcafe";

export default class IndexPage {
  listItems: Selector;
  imageItem: Selector;
  addButton: Selector;

  constructor() {
    this.listItems = Selector('[data-test="list-items"]');
    this.addButton = Selector('[data-test="add-button"]');
    this.imageItem = Selector('[data-test="image-item"]');
  }

  async selectFruit(index: number = 0) {
    await t.click(this.listItems.nth(index));
  }

  async addFruit() {
    await t.click(this.addButton);
  }
}
