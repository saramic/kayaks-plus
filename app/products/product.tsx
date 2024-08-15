"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartDispatchContext } from "../CartContext";

export default function Product({
  product: { id, title, imgSrc, description, price },
}) {
  const dispatch = useContext(CartDispatchContext);
  const addToCart = (event) => {
    console.log("adding to cart");
    event.target.classList.toggle("is-loading");
    dispatch({
      type: "added",
      productId: id,
      name: title,
      price,
    });
    console.log("adding to cart finished");
    setTimeout(() => {
      event.target.classList.toggle("is-loading");
    }, 300);
  };
  return (
    <div id={`product-${id}`} className="card">
      <div className="card-image">
        <Link href={`/products/${id}`}>
          <figure className="image is-4by3">
            <Image
              src={`/images/${imgSrc}`}
              alt="alt"
              width="300"
              height="300"
            />
          </figure>
        </Link>
      </div>
      <div className="card-content">
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            {new Intl.NumberFormat("en-AU", {
              style: "currency",
              currency: "AUD",
            }).format(price)}
          </p>
          <button className="button is-link" onClick={addToCart}>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
