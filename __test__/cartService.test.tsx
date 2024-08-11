import { describe, beforeEach, expect, test, vi } from "vitest";
import { cartService } from "../app/cartService";

vi.mock("uuid", () => ({
  v4: vi.fn(() => "11111111-0000-4000-0000-000000000000"),
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
});
