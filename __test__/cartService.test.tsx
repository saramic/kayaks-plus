import { describe, beforeEach, expect, test, vi } from "vitest";
import { cartService } from "../app/cartService";

let count = 0;
vi.mock("uuid", () => ({
  v4: vi.fn(() => {
    const lastPart = ("000000000000" + count++).slice(-12);
    return `11111111-0000-4000-0000-${lastPart}`;
  }),
}));

beforeEach(() => {
  window.localStorage.clear();
});

describe("cartService", () => {
  test("has no items by default", () => {
    const cart = new cartService(window.localStorage);
    expect(cart.items().length).toBe(0);
  });

  test("When you add an item, it is in the cart", () => {
    const cart = new cartService();
    cart.addItem({ productId: "1", name: "item 1", price: 101 });
    expect(cart.items()).toEqual([
      {
        cartId: "11111111-0000-4000-0000-000000000000",
        productId: "1",
        name: "item 1",
        price: 101,
        quantity: 1,
        cost: 101,
      },
    ]);
  });

  test("A cart with items will have the correct total", () => {
    const cart = new cartService();
    cart.addItem({ productId: "1", name: "item 1", price: 101 });
    cart.addItem({ productId: "2", name: "item 2", price: 220 });
    expect(cart.total()).toEqual(321);
  });

  test("A cart with items will have the correct count", () => {
    const cart = new cartService();
    cart.addItem({ productId: "1", name: "item 1", price: 101 });
    cart.addItem({ productId: "2", name: "item 2", price: 220 });
    expect(cart.count()).toEqual(2);
  });

  test("A cart with items can have items removed", () => {
    const cart = new cartService();
    cart.addItem({ productId: "1", name: "item 1", price: 101 });
    cart.addItem({ productId: "2", name: "item 2", price: 220 });
    expect(cart.count()).toEqual(2);
    const items = cart.items();
    expect(cart.removeItem(items[0].cartId)).toEqual(items[0]);
    expect(cart.count()).toEqual(1);
  });
});
