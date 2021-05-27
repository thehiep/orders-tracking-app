import React from 'react';
import classes from './OrderItem.module.css';
import OrderItemDetail from './OrderItemDetail/OrderItemDetail';
import Order from '../../../models/order'
import Card from '../../UI/Card/Card';

const OrderItem: React.FC<Order> = (props) => {

    return <tr className="order-item">
        <td>{props.id}</td>
        <td>{props.status}</td>
        <td>{props.customerName}</td>
        <td>{props.riderName}</td>
        <td>{props.orderAddress}</td>
        <td>{props.merchantName}</td>
        <td>{props.merchantAddress}</td>
        <td>
            <p>dishes:</p>
            {props.dishes.map(item => <OrderItemDetail name={item.name} price={item.price} />)}
        </td>
        <td>{props.totalPrice}</td>
        <td>{props.updatedTime.toDateString()}</td>
    </tr>

}

export default OrderItem;