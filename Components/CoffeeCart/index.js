import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

// Observer
import { observer } from "mobx-react";

// Store
import cartStore from "../../Store/CartStore";

class CoffeeCart extends Component {
  checkoutItems = () => {
    cartStore.checkoutCart();
    alert("Thank you for shopping with us!");
  };

  render() {
    const items = cartStore.items;
    const cartItems = items.map(item => (
      <CartItem item={item} key={`${item.drink} ${item.option}`} />
    ));

    return (
      <List>
        {cartItems}
        <Button full danger onPress={this.checkoutItems}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CoffeeCart.navigationOptions = {
  title: "Cart"
};

export default observer(CoffeeCart);
