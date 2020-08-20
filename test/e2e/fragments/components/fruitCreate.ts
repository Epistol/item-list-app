import { t, Selector } from "testcafe";

export default class FruitCreate {
  fruitName: Selector;
  fruitImage: Selector;
  fruitPrice: Selector;
  fruitIsFruit: Selector;
  fruitColor: Selector;
  fruitDescription: Selector;
  fruitTaste: Selector;
  btnAdd: Selector;
  btnClose: Selector;

  constructor() {
    this.fruitName = Selector('[data-test="fruit-name"]');
    this.fruitImage = Selector('[data-test="fruit-image"]');
    this.fruitPrice = Selector('[data-test="fruit-price"]');
    this.fruitIsFruit = Selector('[data-test="fruit-isFruit"]');
    this.fruitColor = Selector('[data-test="fruit-color"]');
    this.fruitDescription = Selector('[data-test="fruit-description"]');
    this.fruitTaste = Selector('[data-test="fruit-taste"]');
    this.btnAdd = Selector('[data-test="btn-add"]');
    this.btnClose = Selector('[data-test="btn-close"]');
  }

  async addFruit() {
    await t.typeText(this.fruitName, "Cherry");
    await t.typeText(
      this.fruitImage,
      "https://cdn.dribbble.com/users/146798/screenshots/6118950/cherries-dribbble_4x.jpg?compress=1&resize=1200x900"
    );
    await t.typeText(this.fruitPrice, "2");
    await t.click(this.fruitColor, { offsetY: 20 });
    await t.typeText(
      this.fruitDescription,
      "Cherry is the edible fruit of the cherry tree."
    );
    await t.typeText(this.fruitTaste, "Sweet");
    await t.click(this.btnAdd);
  }
}
