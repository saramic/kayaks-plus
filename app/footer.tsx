import Link from "next/link";

export default function Footer() {
  return (
    <footer className="has-text-centered is-flex-align-items-flex-end mt-auto">
      <nav className="level pb-4 navbar">
        <p className="level-item has-text-centered">
          kayaks
          <span className="has-text-weight-light">plus.store</span>
          <span className="icon-text pl-3">
            <span className="icon is-size-3">
              <i className="fas fa-earth-oceania"></i>
            </span>
          </span>
        </p>
        <p className="level-item has-text-centered has-text-weight-light">
          <Link href="/" className="navbar-item">
            <span className="icon">
              <i className="fas fa-search"></i>
            </span>
            search
          </Link>
        </p>
        <p className="level-item has-text-centered has-text-weight-light">
          <Link href="/about" className="navbar-item">
            about
          </Link>
        </p>
        <p className="level-item has-text-centered has-text-weight-light">
          <Link href="/" className="navbar-item">
            refunds
          </Link>
        </p>
        <p className="level-item has-text-centered has-text-weight-light">
          <Link href="/" className="navbar-item">
            contact us
          </Link>
        </p>
        <p className="level-item has-text-centered">
          <small>
            <span className="has-text-weight-light">Copyright @2024</span>
            <br />
          </small>
        </p>
      </nav>
    </footer>
  );
}
