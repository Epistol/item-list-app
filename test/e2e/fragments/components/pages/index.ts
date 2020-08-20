import { t, Selector } from "testcafe";

export default class IndexPage {
  listItems: Selector;
  title: Selector;
  imageItem: Selector;
  addBtn: Selector;
  deleteBtn: Selector;

  constructor() {
    this.listItems = Selector('[data-test="list-items"]');
    this.addBtn = Selector('[data-test="add-button"]');
    this.deleteBtn = Selector('[data-test="delete-button"]');
    this.imageItem = Selector('[data-test="image-item"]');
    this.title = Selector('[data-test="title-item"]');
  }

  async selectFruit(index: number = 0) {
    await t.click(this.listItems.nth(index));
  }

  async addFruit() {
    await t.click(this.addBtn);
  }

  async deleteFruit() {
    const item = this.listItems.nth(-1);
    const deleteBtn = item.find('[data-test="delete-button"]');
    await t.click(deleteBtn);
  }
}
