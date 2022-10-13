// create Order context
import {createContext, useContext} from 'react';

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const createOrder = () => {
        // create an order in the cloud
        // clear the basket
    }

    return (
        <OrderContext.Provider value={{
            createOrder,

        }}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
