import Image from "next/image";

export default function Product({ product: { imgSrc, description } }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <Image src={`/images/${imgSrc}`} alt="alt" width="300" height="300" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">{description}</div>
      </div>
    </div>
  );
}
