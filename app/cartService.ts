type NewCartItemType = {
  productId: string;
  name: string;
  price: number;
};
type CartItemType = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  cost: number;
};

export class cartService {
  _data: CartItemType[];

  constructor() {
    this.refresh();
  }
  refresh() {
    this._data = [];
  }
  getItems() {
    return this._data
  }
  addItem(item: NewCartItemType) {
    const fullItem = { ...item, quantity: 1, cost: item.price };
    this._data.push(fullItem)
  }
}