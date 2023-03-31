import { useState, useCallback, useRef } from "react";
import {
  ActionList,
  AppProvider,
  Frame,
  Page,
  TopBar,
  FooterHelp,
  Link,
  Layout,
  Icon,
  Text,
} from "@shopify/polaris";
import { CustomPageMarkup } from "@/components/page";
import { NavigationMarkup } from "@/components/navigation";
import { userMenuActions } from "@/data/user-menu";
import { NotificationMajor, ExternalMinor } from "@shopify/polaris-icons";

export function App() {
  const skipToContentRef = useRef<HTMLAnchorElement>(null);

  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue("");
  }, []);
  const handleSearchFieldChange = useCallback((value: string) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Youness Idbakkasse"
      initials="Y"
      avatar="https://cdn.shopify.com/s/files/1/0442/9283/3431/files/profile.jpg"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={NotificationMajor} />
          <Text as="span" visuallyHidden>
            Notifications
          </Text>
        </span>
      }
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        {
          content: "Let's work together on your Shopify project",
          url: "https://chat.blanklob.com/work",
          icon: ExternalMinor,
          external: true,
        },
        {
          content: "Shopify Technology Consultation",
          url: "https://chat.blanklob.com/consultation",
          icon: ExternalMinor,
          external: true,
        },
        {
          content: "Partnering on a Shopify project",
          url: "https://chat.blanklob.com/partnership",
          icon: ExternalMinor,
          external: true,
        },
        {
          content: "1 to 1 Training session on Shopify for Developers",
          url: "https://chat.blanklob.com/training",
          icon: ExternalMinor,
          external: true,
        },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const skipToContentTarget = (
    <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} />
  );

  const logo = {
    width: 100,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0442/9283/3431/files/Group_1.svg",
    url: "/",
    accessibilityLabel: "Shopify",
  };

  return (
    <AppProvider
      i18n={{
        Polaris: {
          Avatar: {
            label: "Avatar",
            labelWithInitials: "Avatar with initials {initials}",
          },
          ContextualSaveBar: {
            save: "Save",
            discard: "Discard",
          },
          TextField: {
            characterCount: "{count} characters",
          },
          TopBar: {
            toggleMenuLabel: "Toggle menu",
            SearchField: {
              clearButtonLabel: "Clear",
              search: "Search",
            },
          },
          Modal: {
            iFrameTitle: "body markup",
          },
          Frame: {
            skipToContent: "Skip to content",
            navigationLabel: "Navigation",
            Navigation: {
              closeMobileNavigationLabel: "Close navigation",
            },
          },
        },
      }}
    >
      <Frame
        logo={logo}
        topBar={topBarMarkup}
        navigation={NavigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        skipToContentTarget={skipToContentRef}
      >
        <Page
          title="Orders"
          primaryAction={{ content: "Create order" }}
          secondaryActions={[{ content: "Export" }]}
          fullWidth
        >
          <Layout>
            <Layout.Section fullWidth>
              {skipToContentTarget}
              <CustomPageMarkup />
            </Layout.Section>
            <Layout.Section fullWidth>
              <FooterHelp>
                Learn more about{" "}
                <Link url="https://help.shopify.com/en/manual/orders">
                  orders
                </Link>
              </FooterHelp>
            </Layout.Section>
            <Layout.Section></Layout.Section>
          </Layout>
        </Page>
      </Frame>
    </AppProvider>
  );
}
