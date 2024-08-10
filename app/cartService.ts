import { v4 as uuidv4 } from 'uuid';
type NewCartItemType = {
  productId: string;
  name: string;
  price: number;
};
type CartItemType = {
  cartId: string;
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
    const fullItem = { cartId: uuidv4(), ...item, quantity: 1, cost: item.price };
    this._data.push(fullItem)
  }
}