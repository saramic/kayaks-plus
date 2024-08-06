import Image from "next/image";
import Link from "next/link";

export default function Product({ product: { id, imgSrc, description } }) {
  return (
    <div className="card">
      <Link href={`/products/${id}`}>
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
      </Link>
    </div>
  );
}
