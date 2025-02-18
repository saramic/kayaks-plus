import { v4 as uuidv4 } from "uuid";
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

export class CartService {
  _data: CartItemType[];
  _storage: Storage;

  constructor(storage: Storage = undefined) {
    this._data = []; // set for statis site generation
    try {
      this._storage =
        storage || (typeof window !== "undefined" && window.localStorage);
    } catch (e) {
      console.error("no storage available", e);
    }

    this.refresh();
  }

  private refresh() {
    // TODO: this is a hack to deal with window storage not being available in
    //       cypress
    if (!this._storage) return;

    const cartData = this._storage.getItem("cart");

    if (cartData) {
      // TODO: deal with invalid JSON inside cart
      // try {
      this._data = JSON.parse(cartData);
      // } catch (e) {
      //   // handle invalid JSON
      //   this._data = [];
      //   this.saveCart();
      // }
    } else {
      this._data = [];
    }
  }

  items() {
    return this._data;
  }

  updateCart(newCart: CartItemType[]) {
    this._data = newCart;
    this.saveCart();
  }

  private saveCart() {
    this._storage.setItem("cart", JSON.stringify(this._data));
  }
}
