// create Basket context
import {createContext, useContext} from 'react';

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
    const addDishToBasket = (dish, quantity) => {
        // console.log('addDishToBasket', dish, quantity);
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
