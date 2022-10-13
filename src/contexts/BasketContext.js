// create Basket context
import {createContext, useContext, useState} from 'react';
import {useAuthContext} from "./AuthContext";

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
    const {sub} = useAuthContext();
    const [restaurant, setRestaurant] = useState(null);
    const [basket, setBasket] = useState(null);
    const addDishToBasket = (dish, quantity) => {
        // console.log('addDishToBasket', dish, quantity);
        // get the existing basket from local storage or  create a new one
        // create a BasketDishItem and add to cloud

    }

    return (
        <BasketContext.Provider value={{
            addDishToBasket,
        }}>
        {children}
        </BasketContext.Provider>
    );
}


export default BasketContextProvider;

export const useBasketContext = () => {
    return useContext(BasketContext);
}
