import React from "react";
import { View } from "react-native";
import { loader } from "./styles";
import Spinner from "react-native-loading-spinner-overlay";

const Loader = () => (
  <View style={loader.container}>
    <Spinner visible textStyle={loader.spinnerTextStyle} />
  </View>
);

export default Loader;
