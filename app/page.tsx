import "bulma/css/bulma.min.css";

import Footer from "./footer";
import Header from "./header";
import Products from "./products/products";

export default function Page() {
  return (
    <main className="container hero is-fullheight">
      <Header />
      <Products />
      <Footer />
    </main>
  );
}
