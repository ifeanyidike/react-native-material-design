<<<<<<< HEAD
import * as React from "react";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import CustomIcon from "./CustomIcon";

const CardAction = (props) => {
  const { colors } = useTheme();
  return (
    <React.Fragment>
      <CustomIcon
        name={props.name}
        size={20}
        pLeft={35}
        color={colors.iconColor}
        pad={4}
      />
      <Text style={{ marginTop: 5, color: "#808080" }}> {props.text}</Text>
    </React.Fragment>
  );
};

export default CardAction;
=======
import * as React from "react";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import CustomIcon from "./CustomIcon";

const CardAction = (props) => {
  const { colors } = useTheme();
  return (
    <React.Fragment>
      <CustomIcon
        name={props.name}
        size={20}
        pLeft={35}
        color={colors.iconColor}
        pad={4}
      />
      <Text style={{ marginTop: 5, color: "#808080" }}> {props.text}</Text>
    </React.Fragment>
  );
};

export default CardAction;
>>>>>>> 1e737bc0f2fa0e2c7d5a5637b27c1cde5e796a52
