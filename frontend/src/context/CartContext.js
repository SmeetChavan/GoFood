import { useContext , createContext, useReducer} from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state , action) => {

    switch(action.type){
        case "ADD":
            return [...state , {foodItem : action.foodItem , quan : action.quan , finalPrice : action.finalPrice}];

        case "DELETE":
            let newArr = [...state]

            newArr.splice(action.index , 1);

            return newArr;

        case "UPDATE":
            let arr = [...state]

            arr.splice(action.index , 1 , {foodItem : action.foodItem , quan : action.quan , finalPrice : action.finalPrice})

            return arr;

        case "CHECKOUT":
            return [];

        default :
            console.log("Error in reducer!");
    }
}


export const CartProvider = ({children}) => {

    const [state , dispatch] = useReducer(reducer , []);

    return (

        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>

                {children}

            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    );
}

export const useDispatchCart = () => useContext(CartDispatchContext);
export const useCart = () => useContext(CartStateContext);