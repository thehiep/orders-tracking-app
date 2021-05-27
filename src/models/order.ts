import Dish from "./dish";

class Order {
    id: number;
    status: string;
    customerName: string;
    riderName: string;
    orderAddress: string;
    merchantName: string;
    merchantAddress: string;
    dishes: Dish[];
    totalPrice: number;
    updatedTime: Date;

    constructor(id: number, status: string, customerName: string, riderName: string, orderAddress: string,
        merchantName: string, merchantAddress: string, dishes: Dish[], updatedTime: Date) {
        this.id = id;
        this.status = status;
        this.customerName = customerName;
        this.riderName = riderName;
        this.orderAddress = orderAddress;
        this.merchantAddress = merchantAddress;
        this.merchantName = merchantName;
        this.dishes = dishes;
        this.totalPrice = dishes.map(item => item.price).reduce((acc, curr) => acc + curr);
        this.updatedTime = updatedTime;
    }

}

export default Order;