import classes from './OrdersFilter.module.css';
import Card from '../UI/Card/Card';
import OrderStatus from '../Orders/OrderStatus';
import React from 'react';
import OrdersFilterType from './OrdersFilterType';
import { parse } from 'querystring';

const OrdersFilter: React.FC<{ onFilterChange: (filterObj: OrdersFilterType) => void }> = (props) => {
    const idRef = React.createRef<HTMLInputElement>();
    const statusRef = React.createRef<HTMLSelectElement>();
    const cusNameRef = React.createRef<HTMLInputElement>();
    const riderRef = React.createRef<HTMLInputElement>();
    const merchantRef = React.createRef<HTMLInputElement>();
    const updatedTimeRef = React.createRef<HTMLSelectElement>();

    const filterChangeHandler = (event: React.ChangeEvent) => {
        let filteredObj: OrdersFilterType = {
            id: undefined,
            status: undefined,
            // id: idRef.current?.value || undefined,
            // status: statusRef.current?.value || "",
            customerName: cusNameRef.current?.value,
            riderName: riderRef.current?.value,
            merchantName: merchantRef.current?.value,
            updatedTime: undefined
        };
        filteredObj.customerName = cusNameRef.current?.value || "";
        filteredObj.riderName = riderRef.current?.value || "";
        filteredObj.merchantName = merchantRef.current?.value || "";
        if (idRef.current) {
            filteredObj.id = parseInt(idRef.current.value);
        }
        if (statusRef.current) {
            filteredObj.status = Object.values(OrderStatus).find(item => item === statusRef.current!.value);
        }
        if (updatedTimeRef.current) {
            filteredObj.updatedTime = parseInt(updatedTimeRef.current.value);
        }
        props.onFilterChange(filteredObj);
    }

    return (
        <Card>
            <div className={classes['orders-filter']}>
                <div className={classes["orders-filter__control"]}>
                    <label>Id</label>
                    <input type="number" ref={idRef} onChange={filterChangeHandler} />
                </div>

                <div className={classes["orders-filter__control"]}>
                    <label>Status</label>
                    <select ref={statusRef} onChange={filterChangeHandler}>
                        <option value="">All</option>
                        {Object.values(OrderStatus).map(value => <option key={value} value={value}>{value}</option>)}
                    </select>
                </div>
                <div className={classes["orders-filter__control"]}>
                    <label>Customer Name</label>
                    <input type="text" ref={cusNameRef} onChange={filterChangeHandler} />
                </div>
                <div className={classes["orders-filter__control"]}>
                    <label>Rider Name</label>
                    <input type="text" ref={riderRef} onChange={filterChangeHandler} />
                </div>
                <div className={classes["orders-filter__control"]}>
                    <label>Merchant Name</label>
                    <input type="text" onChange={filterChangeHandler} />
                </div>
                <div className={classes["orders-filter__control"]}>
                    <label>Updated time</label>
                    <select ref={updatedTimeRef} onChange={filterChangeHandler}>
                        <option value=""></option>
                        <option value="5">last 5 minues</option>
                        <option value="10">last 10 minues</option>
                        <option value="15">last 15 minues</option>
                    </select>
                </div>

            </div>
        </Card>
    )
}

export default OrdersFilter;