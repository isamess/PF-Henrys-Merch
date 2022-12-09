import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: user.reducer,
        product: product.reducer,
        order: order.reducer,
        paymentMethod: paymentMethod.reducer
    }
})