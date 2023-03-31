import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  CustomersMinor,
  ContentMinor,
  AnalyticsMinor,
  MarketingMinor,
  DiscountsMinor,
} from "@shopify/polaris-icons";
import { ordersArray } from "./orders";

export const adminMenu = [
  {
    url: "#",
    excludePaths: ["#"],
    label: "Home",
    icon: HomeMinor,
  },
  {
    url: "#",
    excludePaths: ["#"],
    label: "Orders",
    icon: OrdersMinor,
    selected: true,
    badge: `${ordersArray.length}`,
    subNavigationItems: [
      {
        url: "#",
        excludePaths: ["#"],
        disabled: false,
        label: "Drafts",
      },
      {
        url: "#",
        excludePaths: ["#"],
        disabled: false,
        label: "Shipping labels",
      },
      {
        url: "#",
        excludePaths: ["#"],
        disabled: false,
        label: "Abandoned checkouts",
      },
    ],
  },
  {
    url: "#",
    excludePaths: ["#"],
    label: "Products",
    icon: ProductsMinor,
  },
  {
    url: "#",
    excludePaths: ["#"],
    label: "Customers",
    icon: CustomersMinor,
  },
  {
    url: "#",
    excludePaths: ["#"],
    label: "Content",
    icon: ContentMinor,
  },
  {
    url: "#",
    excludePaths: ["#"],
    label: "Analytics",
    icon: AnalyticsMinor,
  },
  {
    url: "#",
    excludePaths: ["#"],
    label: "Marketing",
    icon: MarketingMinor,
  },
  {
    url: "#",
    excludePaths: ["#"],
    label: "Discounts",
    icon: DiscountsMinor,
  },
];
