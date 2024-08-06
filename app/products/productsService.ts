type ProductType = {
  description: string;
  imgSrc: string;
};

export class productsService {
  _data: ProductType[];

  constructor() {
    this._data = [
      {
        description: "many colours",
        imgSrc: "falcon_promo_01.jpg",
      },
      {
        description: "tough carbon fibre",
        imgSrc: "falcon_promo_02.jpg",
      },
      {
        description: "waterproof",
        imgSrc: "falcon_promo_03.jpg",
      },
      {
        description: "with matching bag",
        imgSrc: "falcon_promo_04.jpg",
      },
      {
        description: "white and yellow writing",
        imgSrc: "falcon_promo_05.jpg",
      },
      {
        description: "white outlines",
        imgSrc: "falcon_promo_06.jpg",
      },
    ];
  }

  getProducts() {
    return this._data;
  }
}