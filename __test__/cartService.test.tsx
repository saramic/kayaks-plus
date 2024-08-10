import { describe, expect, test, vi } from "vitest";
import { cartService } from "../app/cartService";

vi.mock("uuid", () => ({
  v4: vi.fn(() => "11111111-0000-4000-0000-000000000000"),
}));
describe("cartService", () => {
  test("has no items by default", () => {
    const cart = new cartService();
    expect(cart.getItems().length).toBe(0);
  });

  test("When you add an item, it is in the cart", () => {
    const cart = new cartService();
    cart.addItem({ productId: "1", name: "item 1", price: 101 });
    expect(cart.getItems()).toEqual([
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
});
