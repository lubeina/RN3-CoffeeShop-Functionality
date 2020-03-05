import { decorate, observable, computed } from "mobx";

class CartStore {
  items = [];

  addItemToCart = item => {
    const found = this.items.find(
      _item => _item.drink === item.drink && _item.option === item.option
    );
    if (found) {
      found.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  };
  removeItemFromCart = item =>
    (this.items = this.items.filter(_item => _item != item));

  checkoutCart = () => (this.items = []);

  //   calculateQuantity = () => {
  //     const quan = this.items.map(item => item.quantity);
  //     let sum = quan.reduce((acc, val) => {
  //       return acc + val;
  //     }, 0);
  //     return sum;
  //   };

  get quantity() {
    let total = 0;
    this.items.forEach(item => (total += item.quantity));
    return total;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
