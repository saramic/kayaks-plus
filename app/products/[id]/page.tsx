import Header from "../../header";
import Image from "next/image";
import { productsService } from "../productsService";
import { redirect } from "next/navigation";

export default function Product({ params: { id } }) {
  const products = new productsService();
  const { imgSrc, description } =
    products.getProducts().find((product) => product.id === id) || {};
  return imgSrc ? (
    <>
      <Header />
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Image
              src={`/images/${imgSrc}`}
              alt="alt"
              width="300"
              height="300"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">{description}</div>
        </div>
      </div>
    </>
  ) : (
    redirect("/")
  );
}
