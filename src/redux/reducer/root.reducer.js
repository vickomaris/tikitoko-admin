import { combineReducers } from "redux"
import authReducer from "./auth.reducer"

import buyerReducer from "./buyer.reducer"
import sellerReducer from "./seller.reducer"
import categoryReducer from "./category.reducer"
import productReducer from "./product.reducer"

const rootReducer = combineReducers({
    auth: authReducer,

    buyer: buyerReducer,
    seller: sellerReducer,
    product: productReducer,
    category: categoryReducer,
})

export default rootReducer