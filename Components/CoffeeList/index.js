import React from "react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store
import coffeeStore from "../../Store/CoffeeStore";

// Component
import CoffeeItem from "./CoffeeItem";
import CartButton from "../Buttons/CartButton";
import Loading from "../Loading";

const CoffeeList = () => {
  if (coffeeStore.loading) {
    <Loading />;
  }
  const coffeeshopList = coffeeStore.coffeeshops.map(coffeeshop => (
    <CoffeeItem coffeeshop={coffeeshop} key={coffeeshop.id} />
  ));

  return (
    <Content>
      <List>{coffeeshopList}</List>
    </Content>
  );
};

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerRight: <CartButton />
};

export default CoffeeList;
