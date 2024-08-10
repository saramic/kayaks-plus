import Image from "next/image";
import Link from "next/link";

export default function Product({
  product: { id, title, imgSrc, description, price },
}) {
  return (
    <div className="card">
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
        </div>
      </div>
    </div>
  );
}
