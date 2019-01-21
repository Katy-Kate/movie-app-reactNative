import CallApi from '../api/api';
import { Actions } from 'react-native-router-flux';
import { action, observable, configure } from 'mobx';
import { userStore } from './userStore';
configure({ enforceActions: 'always' });

class LoginFormStore {
	@observable
	loginValues = {
		username: 'KateTuralnikova',
		password: 'ekaterina00',
		repeatPassword: 'ekaterina00'
	};

	@observable
	errors = {
		base: null
	};

	@observable submitting = false;

	validateFields = () => {
		const errors = {};
		if (this.loginValues.username.length <= 4) {
			errors.username = 'Must be more then 4 charecters';
		}
		if (this.loginValues.password.length <= 5) {
			errors.password = 'Must be more then 5 charecters';
		}
		if (this.loginValues.repeatPassword !== this.loginValues.password) {
			errors.repeatPassword = 'Password must be the same';
		}
		return errors;
	};

	@action
	handleBlur = (value, nameInput) => {
		const errors = this.validateFields();
		this.errors[nameInput] = errors[nameInput];
	};

	@action
	onChange = (value, nameInput) => {
		this.loginValues[nameInput] = value;
		this.errors[nameInput] = '';
		if (this.errors.base) {
			this.errors.base = null;
		}
	};

	@action
	onLogin = () => {
		const errors = this.validateFields();
		if (Object.keys(errors).length > 0) {
			this.updateErrors(errors);
		} else {
			this.onSubmit();
		}
	};

	@action
	updateErrors = (errors = {}) => {
		for (let key in errors) {
			this.errors[key] = errors[key];
		}
	};

	@action
	onChangeSubmiting = (value) => {
		this.submitting = value;
	};

	onSubmit = () => {
		this.onChangeSubmiting(true);
		let session_id = null;
		let baseError = null;
		CallApi.get('/authentication/token/new')
			.then((data) => {
				return CallApi.post('/authentication/token/validate_with_login', {
					body: {
						username: this.loginValues.username,
						password: this.loginValues.password,
						request_token: data.request_token
					}
				});
			})
			.then((data) => {
				return CallApi.post('/authentication/session/new', {
					body: { request_token: data.request_token }
				});
			})
			.then((data) => {
				session_id = data.session_id;
				return CallApi.get('/account', {
					params: { session_id: data.session_id }
				});
			})
			.then((user) => {
				this.onChangeSubmiting(false);
				userStore.updateAuth({ session_id, user });
				Actions.movies();
			})
			.catch((error) => {
				console.log('error', error);
				this.onChangeSubmiting(false);
				this.updateErrors({ base: error.status_message });
			});
	};
}
export const loginFormStore = new LoginFormStore();
