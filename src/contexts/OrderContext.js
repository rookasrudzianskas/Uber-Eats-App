// create Order context
import {createContext, useContext} from 'react';

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    return (
        <OrderContext.Provider value={{

        }}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
