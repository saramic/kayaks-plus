"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const handleBurgerClick = (event) => {
    event.target.classList.toggle("is-active");
    document
      .getElementById(event.target.dataset.target)
      ?.classList.toggle("is-active");
  };

  return (
    <header className="has-text-centered pb-4">
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <Image
            src="/logos/kayaksplus_logo.png"
            alt="kayaksplus logo"
            width="100"
            height="100"
          />
          <Link href="/">
            <h1 className="title has-text-white">
              <span className="has-text-weight-bold">kayaks</span>
              <span className="has-text-weight-light">plus.store</span>
            </h1>
          </Link>
        </div>
      </section>

      <nav className="navbar">
        <div className="navbar-brand">
          <Link href="/" className="navbar-item">
            <span className="icon">
              <i className="fas fa-home"></i>
            </span>
          </Link>
          <div
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={handleBurgerClick}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <p className="level-item has-text-centered"></p>
            <p className="level-item has-text-centered">
              <Link href="/" className="navbar-item">
                paddles
              </Link>
            </p>
            <p className="level-item has-text-centered">
              <Link href="/" className="navbar-item">
                boats
              </Link>
            </p>
          </div>
          <div className="navbar-end">
            <p className="level-item has-text-centered">
              <Link href="/cart" className="navbar-item">
                <span className="icon pr-3">
                  <i className="fas fa-cart-shopping"></i>
                </span>
                cart
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
}
