import React from "react";
import { withNavigation } from "react-navigation";
import { Icon, Button, Badge, Text } from "native-base";

// Observer
import { observer } from "mobx-react";

// Store
import cartStore from "../../Store/CartStore";

const CartButton = ({ navigation }) => {
  return (
    <Button light transparent>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        onPress={() => navigation.navigate("CartScreen")}
      />
      {cartStore.quantity > 0 ? (
        <Badge>
          <Text>{cartStore.quantity}</Text>
        </Badge>
      ) : null}
    </Button>
  );
};

export default withNavigation(observer(CartButton));
