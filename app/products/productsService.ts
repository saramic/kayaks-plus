type ProductType = {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  price: number;
};

export class productsService {
  _data: ProductType[];

  constructor() {
    this._data = [
      {
        id: "1",
        title: "falcon paddle 1",
        description: "many colours",
        imgSrc: "falcon_promo_01.jpg",
        price: 100.10,
      },
      {
        id: "2",
        title: "falcon paddle 2",
        description: "tough carbon fibre",
        imgSrc: "falcon_promo_02.jpg",
        price: 200.20,
      },
      {
        id: "3",
        title: "falcon paddle 3",
        description: "waterproof",
        imgSrc: "falcon_promo_03.jpg",
        price: 300.30,
      },
      {
        id: "4",
        title: "falcon paddle 4",
        description: "with matching bag",
        imgSrc: "falcon_promo_04.jpg",
        price: 400.40,
      },
      {
        id: "5",
        title: "falcon paddle 5",
        description: "white and yellow writing",
        imgSrc: "falcon_promo_05.jpg",
        price: 500.50,
      },
      {
        id: "6",
        title: "falcon paddle 6",
        description: "white outlines",
        imgSrc: "falcon_promo_06.jpg",
        price: 600.60,
      },
    ];
  }

  getProducts() {
    return this._data;
  }
}