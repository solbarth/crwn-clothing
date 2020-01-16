import { createSelector } from 'reselect';

/*
    This is in an input selector because it takes the whole 
    state and then returns some chunk of state one layer deep.
*/
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
);

