import { Selector, t, ClientFunction } from "testcafe";
import IndexPage from "./fragments/components/index";
// import { getPageUrl } from "../helpers";

const baseUrl = process.env.BASE_URL;
const indexPage = new IndexPage();
const getPageUrl = ClientFunction(() => window.location.href);

fixture("Home pae")
  .page(`${baseUrl}/`)
  .afterEach(async () => {
    const logs = await t.getBrowserConsoleMessages();
    console.info(logs.error); // eslint-disable-line
  });

test("should be able to see fruits", async (t: any) => {
  await t.expect(getPageUrl()).contains("/");
  await t.expect(indexPage.listItems.exists).ok();
  await t.expect(indexPage.addButton.exists).ok();
});
