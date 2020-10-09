import * as React from "react";
import { Appbar } from "react-native-paper";

const TopBar = () => (
  <Appbar.Header>
    <Appbar.BackAction />
    <Appbar.Content title="Material Design Tutorial" subtitle="Building UI" />
  </Appbar.Header>
);

export default TopBar;
