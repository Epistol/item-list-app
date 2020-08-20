import { Selector, t, ClientFunction } from "testcafe";
import IndexPage from "../fragments/components/pages/index";
import FruitPage from "../fragments/components/pages/fruitPage";

const baseUrl = "http://localhost:8000";
const indexPage = new IndexPage();
const fruitPage = new FruitPage();
const getPageUrl = ClientFunction(() => window.location.href);

fixture("Home page")
  .page(`${baseUrl}/`)
  .afterEach(async () => {
    const logs = await t.getBrowserConsoleMessages();
    console.info(logs.error); // eslint-disable-line
  });

test("should be able to see fruits", async (t: any) => {
  await t.expect(getPageUrl()).contains("/");
  await t.expect(indexPage.listItems.exists).ok();
  await t.expect(indexPage.addBtn.exists).ok();
});

test("should be able to click on a fruit", async (t: any) => {
  await indexPage.selectFruit(1);
  await t.wait(250);
  await t.expect(fruitPage.fruitTitle.exists).ok();
});
