import { LogOutMinor, ProfileMinor, StoreMinor } from "@shopify/polaris-icons";

export const userMenuActions = [
  {
    items: [
      {
        content: "Manage Account",
        icon: ProfileMinor,
        url: "https://accounts.shopify.com",
        external: true,
      },
      { content: "Stores", icon: StoreMinor, url: "#" },
      { content: "Log out", icon: LogOutMinor },
    ],
  },
  {
    items: [
      {
        content: "Shopify Help Center",
        url: "https://help.shopify.com",
        external: true,
      },
      {
        content: "Changelog",
        url: "https://changelog.shopify.com",
        external: true,
      },
      {
        content: "Community forums",
        url: "https://community.shopify.com",
        external: true,
      },
      {
        content: "Hire a Shopify expert",
        url: "https://blanklob.com",
        external: true,
      },
      { content: "Keyboard shortcuts", url: "#" },
    ],
  },
];
