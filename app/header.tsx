import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
            <p className="title has-text-white">
              <span className="has-text-weight-bold">kayaks</span>
              <span className="has-text-weight-light">plus.store</span>
            </p>
          </Link>
        </div>
      </section>
    </header>
  );
}
