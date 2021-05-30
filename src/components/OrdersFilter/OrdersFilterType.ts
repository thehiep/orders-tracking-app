import OrderStatus from "../Orders/OrderStatus";

type OrdersFilterType = {
    id: number | undefined,
    status: OrderStatus | undefined,
    customerName: string | undefined,
    riderName: string | undefined,
    merchantName: string | undefined,
    updatedTime: number | undefined
}

export default OrdersFilterType;