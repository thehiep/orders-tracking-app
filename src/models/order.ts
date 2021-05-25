import Dish from "./dish";

class Order {
    id: number;
    status: string;
    customerName: string;
    riderName: string;
    orderAddress: string;
    merchantName: string;
    merchantAddress: string;
    dishes: Dish[]

    constructor(id: number, status: string, customerName: string, riderName: string, orderAddress: string,
        merchantName: string, merchantAddress: string, dishes: Dish[]) {
        this.id = id;
        this.status = status;
        this.customerName = customerName;
        this.riderName = riderName;
        this.orderAddress = orderAddress;
        this.merchantAddress = merchantAddress;
        this.merchantName = merchantName;
        this.dishes = dishes;
    }

}

export default Order;