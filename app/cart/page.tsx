"use client";

import { FormEvent } from "react";
import { cartService } from "../cartService";

export default function Page() {
  const cart = new cartService();

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
            {cart.items().length > 0 ? (
              <table className="control is-exanded">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Cost</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items().map(({ cartId, name, quantity, cost }) => (
                    <tr key={`cart-item-${cartId}`}>
                      <td>{name}</td>
                      <td>{quantity}</td>
                      <td>
                        {new Intl.NumberFormat("en-AU", {
                          style: "currency",
                          currency: "AUD",
                        }).format(cost)}
                      </td>
                      <td>
                        <button
                          className="is-danger"
                          onClick={() => cart.removeItem(cartId)}
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
                      }).format(cart.total())}
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

            <hr />
            <h2 className="has-text-weight-bold pb-4">Shipping Address</h2>
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
