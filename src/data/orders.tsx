import { formatNumber } from "@/utils/format-number";
import { Badge, Text } from "@shopify/polaris";

export const ordersArray = [...Array(24).keys()];
export const orders = ordersArray
  .map((i) => ({
    id: `100${i + 1}`,
    order: (
      <Text as="span" variant="bodyMd" fontWeight="semibold">
        #{`10${formatNumber(i + 1)}`}
      </Text>
    ),
    date: `Mars ${formatNumber(i + 5)}, 2023`,
    customer: "Josh Miller",
    total: "$969.44",
    paymentStatus: <Badge progress="complete">Paid</Badge>,
    fulfillmentStatus: <Badge status="attention" progress="incomplete">Unfulfilled</Badge>,
    items: "1 item",
    deliveryMethod: "Standard",
    tags: "",
  }))
  .reverse();

export const resourceName = {
  singular: "order",
  plural: "orders",
};
