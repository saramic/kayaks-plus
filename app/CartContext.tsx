import { v4 as uuidv4 } from "uuid";
import { createContext, useReducer } from "react";
import { CartService } from "./cartService";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

const cartService = new CartService();
export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, cartService.items());

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

type CartItemType = {
  cartId: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  cost: number;
};
export function cartReducer(cart, product) {
  switch (product.type) {
    case "added": {
      const newCart = cart.some(
        (cartProduct) => cartProduct.productId === product.productId
      )
        ? cart.map((cartProduct) => {
            if (cartProduct.productId === product.productId) {
              return {
                ...cartProduct,
                quantity: cartProduct.quantity + 1,
                cost: cartProduct.cost + cartProduct.price,
              };
            }
            return cartProduct;
          })
        : [
            ...cart,
            {
              cartId: uuidv4(),
              ...product,
              quantity: 1,
              cost: product.price,
            },
          ];
      cartService.updateCart(newCart);
      return newCart;
    }
    case "incremented": {
      const newCart =
        cart.some((item) => item.cartId === product.cartId) &&
        cart.map((item) => {
          if (item.cartId === product.cartId) {
            return {
              ...item,
              quantity: item.quantity + 1,
              cost: item.cost + item.price,
            };
          }
          return item;
        });
      cartService.updateCart(newCart);
      return newCart;
    }
    case "decremented": {
      const newCart =
        cart.some((item) => item.cartId === product.cartId) &&
        cart
          .map((item) => {
            if (item.quantity <= 1) {
              return false;
            }
            if (item.cartId === product.cartId) {
              return {
                ...item,
                quantity: item.quantity - 1,
                cost: item.cost - item.price,
              };
            }
            return item;
          })
          .filter((value: boolean | CartItemType) => value);
      cartService.updateCart(newCart);
      return newCart;
    }
    case "deleted": {
      const newCart = cart.filter(
        (item: CartItemType) => item.cartId !== product.cartId
      );
      cartService.updateCart(newCart);
      return newCart;
    }
    case "cartReset": {
      cartService.updateCart([]);
      return [];
    }
    default: {
      throw Error("Unknown action: " + product.type);
    }
  }
}
