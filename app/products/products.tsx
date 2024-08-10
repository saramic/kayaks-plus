"use client";

import Product from "./product";
import { productsService } from "./productsService";

export default function Products() {
  const products = new productsService();
  return (
    <div className="fixed-grid has-1-cols-mobile has-3-cols-tablet has-4-cols">
      <div className="grid is-8">
        {products.getProducts().map((product) => (
          <div className="cell" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
