import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";
const Color = require("color");

export const window = Dimensions.get("window");
export const WIDTH_SCREEN = window.width;
export const HEIGHT_SCREEN = window.height;

EStyleSheet.build({
  $mainColor: "powderblue",
  $mainLightColor: "#efefef",
  $mainDarkColor: "#073356",

  $white: "#ffffff",
  $black: "#000000",
  $errors: "red",

  $fontSize: 14,

  $borderRadiusButton: 7
});

export const loader = EStyleSheet.create({
  spinnerTextStyle: {
    color: "$white",
    zIndex: 2
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$mainDarkColor"
  }
});

export const loginFormStyles = EStyleSheet.create({
  loginFormContainer: {
    backgroundColor: "$mainDarkColor",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  keyboardContainer: {
    paddingTop: 30
  },
  input: {
    width: 300,
    height: 45,
    marginTop: 6,
    paddingHorizontal: 5,
    backgroundColor: () =>
      Color(EStyleSheet.value("$mainDarkColor")).darken(0.3),
    borderRadius: "$borderRadiusButton",
    color: "$mainColor",
    borderColor: () => Color(EStyleSheet.value("$mainDarkColor")).darken(0.5),
    borderWidth: 0.3,
    fontSize: "$fontSize"
  },

  submitStyles: {
    backgroundColor: () =>
      Color(EStyleSheet.value("$mainDarkColor")).darken(0.5),
    width: WIDTH_SCREEN - 100,
    height: 45,
    marginTop: 30,
    borderRadius: "$borderRadiusButton"
  },

  submitDisabled: {
    backgroundColor: () =>
      Color(EStyleSheet.value("$mainDarkColor")).lighten(0.5)
  },

  errors: {
    width: 300,
    paddingHorizontal: 5,
    alignContent: "flex-start",
    color: "$errors",
    fontSize: () => 0.7 * EStyleSheet.value("$fontSize")
  }
});

export const headerStyles = EStyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 10,
    backgroundColor: "$mainDarkColor",
    width: "100%"
  },

  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  }
});

export const pickerSelectStyles = {
  inputIOS: {
    marginBottom: 20,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: "gray",
    height: 50
  },

  inputAndroid: {
    marginBottom: 20,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: "gray",
    height: 50
  }
};

export const filtersStyles = EStyleSheet.create({
  wrapper: {
    backgroundColor: "$mainLightColor",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: "100%",
    zIndex: 100000,
    position: "relative",
    justifyContent: "center"
  },

  filters: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: WIDTH_SCREEN - 40
  },

  title: {
    fontSize: () => 1.3 * EStyleSheet.value("$fontSize"),
    color: "$mainDarkColor",
    marginTop: 30,
    marginBottom: 10,
    paddingBottom: 10,
    textAlign: "center",
    fontWeight: "300"
  }
});

export const movieScreenStyles = EStyleSheet.create({
  moviesContainer: {
    backgroundColor: "$mainLightColor",
    height: HEIGHT_SCREEN
  },
  btn: {
    backgroundColor: () =>
      Color(EStyleSheet.value("$mainDarkColor")).lighten(0.1),
    width: WIDTH_SCREEN / 2 - 50,
    height: 45,
    marginTop: 30,
    borderRadius: "$borderRadiusButton"
  }
});

export const cardMovieStyles = EStyleSheet.create({
  cardMovie: {
    width: WIDTH_SCREEN - 30,
    height: 450,
    borderRadius: "$borderRadiusButton",
    overflow: "hidden"
  },

  cardMovieTitle: {
    fontSize: () => 1.7 * EStyleSheet.value("$fontSize"),
    color: "$mainDarkColor",
    fontWeight: "500"
  },

  imageMovie: {
    height: HEIGHT_SCREEN / 2,
    borderTopRightRadius: "$borderRadiusButton",
    borderTopLeftRadius: "$borderRadiusButton"
  }
});
