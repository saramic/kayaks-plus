import { describe, beforeEach, expect, test } from "vitest";
import { CartService } from "../app/cartService";

beforeEach(() => {
  window.localStorage.clear();
});

describe("cartService", () => {
  test("has no items by default", () => {
    const cart = new CartService(window.localStorage);
    expect(cart.items().length).toBe(0);
  });

  test("can update Cart to a given state", () => {
    const cart = new CartService();
    cart.updateCart([
      {
        cartId: "1",
        productId: "1",
        name: "item 1",
        price: 101,
        quantity: 1,
        cost: 101.0,
      },
    ]);
    expect(cart.items()).toEqual([
      {
        cartId: "1",
        productId: "1",
        name: "item 1",
        price: 101,
        quantity: 1,
        cost: 101.0,
      },
    ]);
  });
});
