import { t, Selector } from "testcafe";

export default class FruitCreate {
  fruitName: Selector;
  fruitImage: Selector;
  fruitPrice: Selector;
  fruitIsFruit: Selector;
  fruitColor: Selector;
  fruitDescription: Selector;
  fruitTaste: Selector;

  constructor() {
    this.fruitName = Selector('[data-test="fruit-name"]');
    this.fruitImage = Selector('[data-test="fruit-image"]');
    this.fruitPrice = Selector('[data-test="fruit-price"]');
    this.fruitIsFruit = Selector('[data-test="fruit-isFruit"]');
    this.fruitColor = Selector('[data-test="fruit-color"]');
    this.fruitDescription = Selector('[data-test="fruit-description"]');
    this.fruitTaste = Selector('[data-test="fruit-taste"]');
  }

  async addFruit() {
    await t.typeText(this.fruitName, "Cerise");
    await t.typeText(
      this.fruitImage,
      "https://cdn.dribbble.com/users/146798/screenshots/6118950/cherries-dribbble_4x.jpg?compress=1&resize=1200x900"
    );
  }
}
