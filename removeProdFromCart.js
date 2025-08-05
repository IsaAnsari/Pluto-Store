import { getCartProductFromLocalStorage } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {

    let cartProducts = getCartProductFromLocalStorage();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // update the localStorage after removing the item
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);

    if (removeDiv) {
        removeDiv.remove();
        //show toast when product added to the cart
        showToast("delete", id);
    }

    updateCartValue(cartProducts);



    // -----------------------------------------------------
    // calculating the card total in our cartProducts page
    // --------------------------------------------------------
    updateCartProductTotal();

};