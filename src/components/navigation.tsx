import { adminMenu } from "@/data/admin-menu";
import { Navigation } from "@shopify/polaris";
import {
  StoreMinor,
  ChevronRightMinor,
  SettingsMinor,
} from "@shopify/polaris-icons";

export const NavigationMarkup = (
  <Navigation location="/">
    <Navigation.Section items={adminMenu} />
    <Navigation.Section
      title="Sales channels"
      items={[
        {
          url: "#",
          excludePaths: ["#"],
          label: "Online Store",
          icon: StoreMinor,
        },
      ]}
      action={{
        accessibilityLabel: "Add sales channel",
        icon: ChevronRightMinor,
        onClick: () => {},
      }}
    />
    <Navigation.Section
      title="Apps"
      items={[]}
      action={{
        accessibilityLabel: "Add an application",
        icon: ChevronRightMinor,
        onClick: () => {},
      }}
    />
    <Navigation.Section
      fill
      items={[
        {
          url: "#",
          excludePaths: ["#"],
          label: "Settings",
          icon: SettingsMinor,
        },
      ]}
    />
  </Navigation>
);
