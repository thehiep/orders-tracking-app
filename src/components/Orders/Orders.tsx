import classes from './Orders.module.css';
import { Fragment, Component } from 'react';
import Card from '../UI/Card/Card';
import OrderItem from './OrderItem/OrderItem'
import Pagination from '../UI/Pagination/Pagination';

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
                <Card>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>status</th>
                                <th>customer</th>
                                <th>rider</th>
                                <th>order address</th>
                                <th>merchant name</th>
                                <th>merchant address</th>
                                <th>dish</th>
                                <th>total price</th>
                                <th>updated time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList}
                        </tbody>
                    </table>
                    <Pagination numberItemPerPage={1} totalItems={orderList.length} />
                </Card>
            </section>
        )
    }

}

export default Orders;