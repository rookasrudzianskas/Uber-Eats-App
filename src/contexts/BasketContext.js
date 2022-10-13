// create Basket context
import {createContext, useContext, useEffect, useState} from 'react';
import {useAuthContext} from "./AuthContext";
import {DataStore} from "aws-amplify";
import {Basket} from "../models";

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
    const {dbUser} = useAuthContext();
    const [restaurant, setRestaurant] = useState(null);
    const [basket, setBasket] = useState(null);

    useEffect(() => {
        DataStore.query(Basket, b => b.restaurantID("eq", restaurant.id).userID("eq", dbUser.id)).then(baskets => setBasket(baskets[0]));
    }, [dbUser, restaurant]);

    const addDishToBasket = (dish, quantity) => {
        // console.log('addDishToBasket', dish, quantity);
        // get the existing basket from local storage or  create a new one
        // create a BasketDishItem and add to cloud

    }

    return (
        <BasketContext.Provider value={{
            addDishToBasket,
            setRestaurant,
        }}>
        {children}
        </BasketContext.Provider>
    );
}


export default BasketContextProvider;

export const useBasketContext = () => {
    return useContext(BasketContext);
}
