import { Selector, t, ClientFunction } from "testcafe";
import IndexPage from "../fragments/components/pages/index";
import FruitCreate from "../fragments/components/fruitCreate";

const baseUrl = "http://localhost:8000";
const indexPage = new IndexPage();
const addFruitModal = new FruitCreate();
const getPageUrl = ClientFunction(() => window.location.href);

fixture("Add fruit")
  .page(`${baseUrl}/`)
  .afterEach(async () => {
    const logs = await t.getBrowserConsoleMessages();
    console.info(logs.error); // eslint-disable-line
  });

test("Should be able to add fruits", async (t: any) => {
  await t.expect(getPageUrl()).contains("/");
  await indexPage.addFruit();
  await addFruitModal.addFruit();

  const cherry = indexPage.listItems.nth(-1).withText("Cherry");
  const fruitExist = cherry.exists;
  await t.expect(fruitExist).ok();
});

test("Should be able to delete fruit", async (t: any) => {
  await indexPage.deleteFruit();

  const cherry = indexPage.listItems.nth(-1).withText("Cherry");
  const fruitExist = cherry.exists;
  await t.expect(fruitExist).notOk();
});
