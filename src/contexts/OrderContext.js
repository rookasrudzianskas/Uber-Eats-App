// create Order context
import {createContext, useContext, useEffect, useState} from 'react';
import {DataStore} from "aws-amplify";
import {Basket, Order, OrderDish} from "../models";
import {useAuthContext} from "./AuthContext";
import {useBasketContext} from "./BasketContext";
import {useNavigation} from "@react-navigation/native";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const {dbUser} = useAuthContext();
    const {restaurant, totalPrice, basketDishes, basket} = useBasketContext();
    const [orders, setOrders] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        DataStore.query(Order, o => o.userID('eq', dbUser.id)).then(setOrders);
    }, [dbUser]);

    const createOrder = async () => {
        // create an order in the cloud
        const newOrder = await DataStore.save(new Order({
            userID: dbUser.id,
            Restaurant: restaurant,
            status: 'NEW',
            total: totalPrice,
        }));

        // add all basket Dishes to order and delete the basket
        await Promise.all(basketDishes.map(basketDish => DataStore.save(new OrderDish({
            quantity: basketDish.quantity,
            orderID: newOrder.id,
            Dish: basketDish.dish,
        }))));

        // clear the basket
        await DataStore.delete(basket);

        // navigate to order details
        setOrders([...orders, newOrder]);
    }

    const getOrder = async (id) => {
        const order = await DataStore.query(Order, id);
        const orderDishes = await DataStore.query(OrderDish, od => od.orderID("eq", id));
        return {...order, dishes: orderDishes};
    }

    return (
        <OrderContext.Provider value={{
            createOrder,
            orders,
            getOrder,
        }}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
