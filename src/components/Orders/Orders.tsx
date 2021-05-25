import classes from './Orders.module.css';
import { Fragment, Component } from 'react';
import Card from '../UI/Card/Card';
import OrderItem from './OrderItem/OrderItem'

const OrdersList = [
    {
        id: 1,
        status: 'Created',
        customerName: 'Henrry',
        riderName: 'Rider',
        orderAddress: 'Ben Thanh Street',
        merchantName: 'The Coffee House',
        merchantAddress: 'Van Hanh Mall',
        dishes: [
            {
                name: 'Tea',
                price: 12
            }
        ],
        totalPrice: 12,
        updatedTime: new Date()
    },
    {
        id: 2,
        status: 'Created',
        customerName: 'Henrry',
        riderName: 'Rider',
        orderAddress: 'Ben Thanh Street',
        merchantName: 'The Coffee House',
        merchantAddress: 'Van Hanh Mall',
        dishes: [
            {
                name: 'Tea',
                price: 12
            }
        ],
        totalPrice: 12,
        updatedTime: new Date()
    },
]
class Orders extends Component {

    componentDidMount() {
        // get data from firebase.

    }

    render() {
        const orderList = OrdersList.map(item => <OrderItem {...item} />);
        return (
            <section className={classes.orders}>

                <ul>
                    <Card>
                        {orderList}
                    </Card>
                </ul>
            </section>
        )
    }

}

export default Orders;