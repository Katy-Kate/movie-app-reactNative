import CallApi from "../api/api";
import { AsyncStorage } from "react-native";
import { action, observable, configure, computed } from "mobx";
import { Actions } from "react-native-router-flux";

configure({ enforceActions: "always" });

class UserStore {
  @observable user = {};

  @observable showLoginModal = false;

  @observable errors = {};

  @observable session_id = null;

  @computed
  get isAuth() {
    return Boolean(Object.keys(this.user).length);
  }

  @action
  getAuth = async () => {
    try {
      const session_id = await AsyncStorage.getItem("session_id");
      if (session_id) {
        const user = await CallApi.get("/account", {
          params: { session_id }
        });
        this.updateAuth({ user, session_id });
        Actions.movies();
        // this.getListAddedMovies("favorite");
        // this.getListAddedMovies("watchlist");
        console.log("getAuth. session_id= ", session_id);
      }
    } catch (e) {
      console.log("getAuth err", e);
    }
  };

  @action
  updateAuth = ({ user, session_id }) => {
    this.user = user;
    this.session_id = session_id;
    AsyncStorage.setItem("session_id", session_id);
    console.log("updateAuth, session_id =", session_id);
  };

  @action
  clearAuth = () => {
    this.user = {};
    this.session_id = null;
  };

  @action
  logOut = () => {
    AsyncStorage.removeItem("session_id")
      .then(() => console.log("logOut "))
      .catch(() => console.log("logOut err"));
    CallApi.delete("/authentication/session", {
      params: { session_id: this.session_id }
    }).then(() => {
      this.clearAuth();
      Actions.loginForm();
    });
  };
}
export const userStore = new UserStore();
