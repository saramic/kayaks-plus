"use client";

import { FormEvent } from "react";

export default function Page() {
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
          <form onSubmit={checkout} data-target="submitForm">
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
