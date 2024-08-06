type ProductType = {
  id: string;
  description: string;
  imgSrc: string;
};

export class productsService {
  _data: ProductType[];

  constructor() {
    this._data = [
      {
        id: "1",
        description: "many colours",
        imgSrc: "falcon_promo_01.jpg",
      },
      {
        id: "2",
        description: "tough carbon fibre",
        imgSrc: "falcon_promo_02.jpg",
      },
      {
        id: "3",
        description: "waterproof",
        imgSrc: "falcon_promo_03.jpg",
      },
      {
        id: "4",
        description: "with matching bag",
        imgSrc: "falcon_promo_04.jpg",
      },
      {
        id: "5",
        description: "white and yellow writing",
        imgSrc: "falcon_promo_05.jpg",
      },
      {
        id: "6",
        description: "white outlines",
        imgSrc: "falcon_promo_06.jpg",
      },
    ];
  }

  getProducts() {
    return this._data;
  }
}