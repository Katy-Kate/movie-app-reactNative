import CallApi from '../api/api';
import { AsyncStorage } from 'react-native';
import { action, observable, configure, computed } from 'mobx';
import { Actions } from 'react-native-router-flux';

configure({ enforceActions: 'always' });

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
	getAuth = () => {
		AsyncStorage.getItem('session_id')
			.then((session_id) =>
				CallApi.get('/account', {
					params: { session_id: session_id }
				}).then((user) => {
					this.updateAuth({ user });
					Actions.movies();
					// this.getListAddedMovies("favorite");
					// this.getListAddedMovies("watchlist");
					console.log('getAuth. session_id= ', session_id);
				})
			)
			.catch(() => console.log('getAuth err'));
	};

	@action
	updateAuth = ({ user, session_id }) => {
		this.user = user;
		this.session_id = session_id;
		AsyncStorage.setItem('session_id', session_id);
		console.log('updateAuth, session_id =', session_id);
	};

	@action
	clearAuth = () => {
		this.user = {};
		this.session_id = null;
	};

	@action
	logOut = () => {
		AsyncStorage.removeItem('session_id').then(() => console.log('logOut ')).catch(() => console.log('logOut err'));
		CallApi.delete('/authentication/session', {
			params: { session_id: this.session_id }
		}).then(() => {
			this.clearAuth();
			Actions.loginForm();
			// this.watchlist = [];
			// this.favorite = [];
		});
	};
}
export const userStore = new UserStore();
