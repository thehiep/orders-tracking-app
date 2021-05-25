import React from 'react';
import classes from './OrderItem.module.css';
import OrderItemDetail from './OrderItemDetail/OrderItemDetail';
import Order from '../../../models/order'

const OrderItem: React.FC<Order> = (props) => {
    return <li>
        <div>
            <h1>ID:{props.id}</h1>
            <p>Status: {props.status}</p>
            <p>customer name: {props.customerName}</p>
            <p>rider name: {props.riderName}</p>
            <p>order address: {props.orderAddress}</p>
            <p>merchant name: {props.merchantName}</p>
            <p>merchant address: {props.merchantAddress}</p>
            <div>
                <p>dishes:</p>
                {props.dishes.map(item => <OrderItemDetail name={item.name} price={item.price} />)}
            </div>
        </div>
    </li>
}

export default OrderItem;