import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLocalStorage = () => {

    let cartProducts = localStorage.getItem('cartProductLS');
    if (!cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartProducts);

    // update the cart button
    updateCartValue(cartProducts);

    return cartProducts;

}