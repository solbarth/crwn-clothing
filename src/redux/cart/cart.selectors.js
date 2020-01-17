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

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedTotal, cartItem) => 
            accumulatedTotal + cartItem.price * cartItem.quantity, 0)
)

