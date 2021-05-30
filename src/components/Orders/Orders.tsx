import classes from './Orders.module.css';
import React, { Component } from 'react';
import Card from '../UI/Card/Card';
import OrderItem from './OrderItem/OrderItem'
import Pagination from '../UI/Pagination/Pagination';
import Order from '../../models/order';

class Orders extends Component<{ items: Order[] }> {

    componentDidMount() {
        // get data from firebase.

    }
    render() {
        const orderList = this.props.items.map(item => <OrderItem key={item.id} {...item} />);
        return (
            <section className={classes.orders}>
                <Card>
                    <h1>Orders({orderList.length})</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Status</th>
                                <th>Customer</th>
                                <th>Rider</th>
                                <th>Order address</th>
                                <th>Merchant name</th>
                                <th>Merchant address</th>
                                <th>Dish</th>
                                <th>Total price</th>
                                <th>Updated time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderList}
                        </tbody>
                    </table>
                    <Pagination numberItemPerPage={10} totalItems={orderList.length} visible={orderList.length > 0} />
                </Card>
            </section>
        )
    }

}

export default Orders;