import Link from "next/link";

export default function Header() {
  return (
    <header className="has-text-centered">
      <section className="hero">
        <div className="hero-body">
          <Link href="/">
            <p className="title">kayaksPlus.store</p>
          </Link>
        </div>
      </section>
    </header>
  );
}
