<<<<<<< HEAD
import * as React from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CustomIcon = (props) => {
  return (
    <View>
      <Icon
        name={props.name}
        size={props.size}
        style={{
          backgroundColor: `${props.bcolor}`,
          color: `${props.color}`,
          paddingLeft: props.pLeft,
          borderRadius: props.rad,
          padding: props.pad,
        }}
      />
    </View>
  );
};

export default CustomIcon;
=======
import * as React from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const CustomIcon = (props) => {
  return (
    <View>
      <Icon
        name={props.name}
        size={props.size}
        style={{
          backgroundColor: `${props.bcolor}`,
          color: `${props.color}`,
          paddingLeft: props.pLeft,
          borderRadius: props.rad,
          padding: props.pad,
        }}
      />
    </View>
  );
};

export default CustomIcon;
>>>>>>> 1e737bc0f2fa0e2c7d5a5637b27c1cde5e796a52
