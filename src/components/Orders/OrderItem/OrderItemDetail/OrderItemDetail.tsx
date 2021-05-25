import React from 'react'
import Dish from '../../../../models/dish';
import classes from './OrderItemDetail.module.css';

const orderItemDetail: React.FC<Dish> = (props) => {
    return (<div className='order-item-detail'>
        <p>name: {props.name}</p>
        <p>price: {props.price}</p>
    </div>)
}


export default orderItemDetail;