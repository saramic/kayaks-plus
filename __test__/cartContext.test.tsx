import { describe, expect, test, vi } from "vitest";
import { cartReducer } from "../app/CartContext";

let count = 0;
vi.mock("uuid", () => ({
  v4: vi.fn(() => {
    const lastPart = ("000000000000" + count++).slice(-12);
    return `11111111-0000-4000-0000-${lastPart}`;
  }),
}));

describe("cartContext", () => {
  test("does not support unsupported actions", () => {
    expect(() =>
      cartReducer(undefined, { type: "not-an-action" })
    ).toThrowError("Unknown action: not-an-action");
  });

  test("cartReset resets to empty array", () => {
    expect(cartReducer([{ cartId: "123" }], { type: "cartReset" })).toEqual([]);
  });

  test("deleted deletes an item", () => {
    expect(
      cartReducer([{ cartId: "123" }, { cartId: "XYZ" }], {
        type: "deleted",
        cartId: "123",
      })
    ).toEqual([{ cartId: "XYZ" }]);
  });

  test("decrements an item from 2 to 1, updating cost", () => {
    expect(
      cartReducer(
        [
          { cartId: "123", quantity: 2, price: 100, cost: 200 },
          { cartId: "XYZ", quantity: 10 },
        ],
        {
          type: "decremented",
          cartId: "123",
        }
      )
    ).toEqual([
      { cartId: "123", quantity: 1, price: 100, cost: 100 },
      { cartId: "XYZ", quantity: 10 },
    ]);
  });

  test("removes an item if decremented from 1", () => {
    expect(
      cartReducer(
        [
          { cartId: "123", quantity: 1 },
          { cartId: "XYZ", quantity: 10 },
        ],
        {
          type: "decremented",
          cartId: "123",
        }
      )
    ).toEqual([{ cartId: "XYZ", quantity: 10 }]);
  });

  test("increments an item from 1 to 2, updating cost", () => {
    expect(
      cartReducer(
        [
          { cartId: "123", quantity: 1, price: 100, cost: 100 },
          { cartId: "XYZ", quantity: 10 },
        ],
        {
          type: "incremented",
          cartId: "123",
        }
      )
    ).toEqual([
      { cartId: "123", quantity: 2, price: 100, cost: 200 },
      { cartId: "XYZ", quantity: 10 },
    ]);
  });

  test("adds a cart item, calculating cost", () => {
    expect(
      cartReducer([{ cartId: "XYZ", productId: "p-1", quantity: 10 }], {
        type: "added",
        productId: "p-2",
        quantity: 1,
        price: 100,
      })
    ).toEqual([
      { cartId: "XYZ", productId: "p-1", quantity: 10 },
      {
        cartId: "11111111-0000-4000-0000-000000000000",
        cost: 100,
        price: 100,
        productId: "p-2",
        quantity: 1,
        type: "added",
      },
    ]);
  });

  test("adds an existing cart item, increments qunatity and re-calculates cost", () => {
    expect(
      cartReducer(
        [
          { cartId: "XYZ", productId: "p-1", quantity: 10 },
          {
            cartId: "123",
            cost: 100,
            price: 100,
            productId: "p-2",
            quantity: 1,
          },
        ],
        {
          type: "added",
          productId: "p-2",
          quantity: 1,
          price: 100,
        }
      )
    ).toEqual([
      { cartId: "XYZ", productId: "p-1", quantity: 10 },
      {
        cartId: "123",
        productId: "p-2",
        quantity: 2,
        price: 100,
        cost: 200,
      },
    ]);
  });
});
