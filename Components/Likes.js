import * as React from "react";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import CustomIcon from "./CustomIcon";

const CardAction = (props) => {
  const { colors } = useTheme();
  return (
    <React.Fragment>
      <CustomIcon
        name="thumb-up"
        size={15}
        bcolor={colors.primary}
        color="#fff"
        rad={20}
        pad={4}
      />
      <CustomIcon
        name="heart"
        size={15}
        bcolor="red"
        color="#fff"
        rad={20}
        pad={4}
      />

      <Text> {props.likes}</Text>
    </React.Fragment>
  );
};

export default CardAction;
