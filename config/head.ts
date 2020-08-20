const appTitle = "Fruit or Not ?";

export default {
  titleTemplate: "%s - " + appTitle,
  title: appTitle || "",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: appTitle || ""
    }
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
};
