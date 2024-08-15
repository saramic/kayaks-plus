"use client";

import { FormEvent, useContext, useEffect, useState } from "react";
import { CartContext, CartDispatchContext } from "../CartContext";

export default function Page() {
  const [cartItems, setCartItems] = useState([]);
  const cart = useContext(CartContext);

  useEffect(() => {
    setCartItems(cart.sort((a, b) => a.name.localeCompare(b.name)));
  }, [cart]);
  const dispatch = useContext(CartDispatchContext);
  const deleteFromCart = (cartId, event) => {
    event.target.classList.toggle("is-loading");
    setTimeout(() => {
      dispatch({
        type: "deleted",
        cartId: cartId,
      });
      setCartItems(cart);
    }, 100);
  };

  const incrementQuantity = (cartId, event) => {
    event.target.classList.toggle("is-loading");
    setTimeout(() => {
      dispatch({
        type: "incremented",
        cartId: cartId,
      });
      setCartItems(cart);
      event.target.classList.toggle("is-loading");
    }, 100);
  };

  const decrementQauntity = (cartId, event) => {
    event.target.classList.toggle("is-loading");
    setTimeout(() => {
      dispatch({
        type: "decremented",
        cartId: cartId,
      });
      setCartItems(cart);
      event.target.classList.toggle("is-loading");
    }, 100);
  };

  const cartTotal = (cart) => {
    return cart.reduce((acc, { cost }) => acc + cost, 0);
  };

  const resetCart = (event) => {
    event.target.classList.toggle("is-loading");
    setTimeout(() => {
      dispatch({
        type: "cartReset",
      });
      setCartItems(cart);
      event.target.classList.toggle("is-loading");
    }, 100);
  };
  const checkout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document
      .getElementById((event.target as HTMLElement).dataset.target)
      .classList.toggle("is-loading");
    setTimeout(() => {
      document
        .getElementById((event.target as HTMLElement).dataset.target)
        .classList.toggle("is-loading");
    }, 300);
  };
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="content">
            {cartItems.length > 0 ? (
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(({ cartId, name, quantity, cost }) => (
                    <tr key={`cart-item-${cartId}`}>
                      <td>{name}</td>
                      <td>
                        {quantity}

                        <span className="fa fa-stack">
                          <button
                            data-testid="quantity-increment"
                            onClick={(event) =>
                              incrementQuantity(cartId, event)
                            }
                          >
                            <span className="icon">
                              <i className="fas fa-caret-up"></i>
                            </span>
                          </button>
                          <button
                            data-testid="quantity-decrement"
                            onClick={(event) =>
                              decrementQauntity(cartId, event)
                            }
                          >
                            <span className="icon">
                              <i className="fas fa-caret-down"></i>
                            </span>
                          </button>
                        </span>
                      </td>
                      <td>
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(cost)}
                      </td>
                      <td>
                        <button
                          className="is-danger"
                          onClick={(event) => deleteFromCart(cartId, event)}
                        >
                          <span className="icon">
                            <i className="fas fa-trash"></i>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="has-text-weight-bold">
                  <tr>
                    <td>Total</td>
                    <td></td>
                    <td>
                      {new Intl.NumberFormat("en-AU", {
                        style: "currency",
                        currency: "AUD",
                      }).format(cartTotal(cart))}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            ) : (
              <section data-testid="no-cart-message">
                <p>No cart items, general enquiry only</p>
              </section>
            )}
            {cartItems?.length !== 0 && (
              <button
                className="button is-danger is-flex ml-auto"
                onClick={(event) => resetCart(event)}
              >
                reset cart
                <span className="icon ml-3">
                  <i className="fas fa-power-off"></i>
                </span>
              </button>
            )}
          </div>
          <form onSubmit={checkout} data-target="submitForm">
            <div className="field">
              <label className="label" htmlFor="name">
                Name
              </label>
              <div className="control">
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder="Full name"
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="Email input"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="phone">
                Phone
              </label>
              <div className="control has-icons-left">
                <input id="phone" className="input" placeholder="Phone" />
                <span className="icon is-small is-left">
                  <i className="fas fa-phone"></i>
                </span>
              </div>
            </div>

            <hr className="mt-6" />
            <h2 className="has-text-weight-bold pb-5">Shipping Address</h2>
            <div className="field">
              <label className="label" htmlFor="address-line-1">
                Address line 1
              </label>
              <div className="control">
                <input
                  id="address-line-1"
                  className="input"
                  type="text"
                  placeholder="Address line 1"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="address-line-2">
                Address line 2
              </label>
              <div className="control">
                <input
                  id="address-line-2"
                  className="input"
                  type="text"
                  placeholder="Address line 2"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="suburb">
                Suburb
              </label>
              <div className="control">
                <input
                  id="suburb"
                  className="input"
                  type="text"
                  placeholder="Suburb"
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="state">
                State
              </label>
              <div className="control">
                <input
                  id="state"
                  className="input"
                  type="text"
                  placeholder="State"
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="payment-preference">
                Payment Preference
              </label>
              <div className="control">
                <div className="select">
                  <select id="payment-preference">
                    <option>Direct Transfer</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="more-information">
                More information
              </label>
              <div className="control">
                <textarea
                  id="more-information"
                  className="textarea"
                  placeholder="Details of your purchase enquiry; e.g. quantity, delivery address, etc."
                ></textarea>
              </div>
            </div>
            <div className="field">
              <button
                id="submitForm"
                type="submit"
                className="button is-primary has-text-white"
              >
                Send purchase enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
