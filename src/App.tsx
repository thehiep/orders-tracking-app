import Orders from './components/Orders/Orders'
import Header from './components/Layout/Header/Header'
import OrdersFilter from './components/OrdersFilter/OrdersFilter';
import { useState } from 'react';
import Order from './models/order';
import OrderStatus from './components/Orders/OrderStatus';
import Dish from './models/dish';
import OrdersFilterType from './components/OrdersFilter/OrdersFilterType';
import './App.css';
const OrdersList = [
  new Order(1, OrderStatus.CREATED, "Henry", "Rider1", "Ben Thanh Street", "The coffee house", "Van Hanh Mall", [new Dish("Tea", 10)], new Date()),
  new Order(2, OrderStatus.CANCELED, "Henry", "Rider1", "Ben Thanh Street", "The coffee house", "Van Hanh Mall", [new Dish("Tea", 10)], new Date()),
  new Order(3, OrderStatus.ACCEPTED, "Louis", "Rider1", "Ben Thanh Street", "The coffee house", "Van Hanh Mall", [new Dish("Tea", 10)], new Date()),
  new Order(4, OrderStatus.DELIVERING, "Henry", "Rider1", "Ben Thanh Street", "The coffee house", "Van Hanh Mall", [new Dish("Tea", 10)], new Date()),
  new Order(5, OrderStatus.DONE, "Henry", "Rider1", "Ben Thanh Street", "The coffee house", "Van Hanh Mall", [new Dish("Tea", 10)], new Date())
]

function App() {
  const [orders, setOrders] = useState(OrdersList);
  const [filterCondition, setFilterCondition] = useState<OrdersFilterType>();
  const filterOrdersHandler = (filterObj: OrdersFilterType) => {
    console.log(filterObj);
    setFilterCondition(filterObj);
  }
  let filterOrders = [...orders];
  if (filterCondition) {
    // filter id.
    if (filterCondition.id && !isNaN(filterCondition.id)) {
      filterOrders = filterOrders.filter(item => item.id === filterCondition.id);
    }
    // filter status
    if (filterCondition.status) {
      filterOrders = filterOrders.filter(item => item.status === filterCondition.status);
    }
    // filter customer name
    if (filterCondition.customerName) {
      filterOrders = filterOrders.filter(item => item.customerName.toLowerCase().indexOf(filterCondition.customerName!.toLocaleLowerCase()) >= 0);
    }
    // filter rider name
    if (filterCondition.status) {
      filterOrders = filterOrders.filter(item => item.riderName.toLowerCase().indexOf(filterCondition.riderName!.toLocaleLowerCase()) >= 0);
    }
    // filter updatedtime.
    if (filterCondition.updatedTime) {
      let lastDatetime = new Date()
      lastDatetime.setMinutes(lastDatetime.getMinutes() - filterCondition.updatedTime);
      filterOrders = filterOrders.filter(item => item.updatedTime <= lastDatetime);
    }
  }

  return (
    <div >
      <Header />
      <main className="app-content">
        <OrdersFilter onFilterChange={filterOrdersHandler} />
        <Orders items={filterOrders} />
      </main>
    </div>
  );
}

export default App;
