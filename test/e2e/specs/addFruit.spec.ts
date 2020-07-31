import { Selector, t, ClientFunction } from "testcafe";
import IndexPage from "../fragments/components/pages/index";
import FruitPage from "../fragments/components/pages/fruitPage";

const baseUrl = "http://localhost:8000";
const indexPage = new IndexPage();
const fruitPage = new FruitPage();
const getPageUrl = ClientFunction(() => window.location.href);

fixture("Add fruit")
  .page(`${baseUrl}/`)
  .afterEach(async () => {
    const logs = await t.getBrowserConsoleMessages();
    console.info(logs.error); // eslint-disable-line
  });

test("should be to add fruits", async (t: any) => {
  await t.expect(getPageUrl()).contains("/");
  await indexPage.addFruit();

  await t.expect(indexPage.listItems.exists).ok();
});
