import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { authService } from './auth.service'
import { TOKEN_LS_NAME } from "../../../constants/constants";
import SHA512 from "crypto-js/sha512";

@Module({ namespaced: true, name: 'authModule', dynamic: true, store })
class AuthModule extends VuexModule {

	public loggedUser: {} | null = null;

	// getters
	get getLoggedUser() {
		return this.loggedUser;
	}
	// END :: getters

	// mutations
	@Mutation
	public setLoggedUser(loggedUser: {} | null): void {
		this.loggedUser = loggedUser
	}
	// END :: mutation

	// actions
	@Action({ rawError: true })
	async loginAction(payload: {}) {
		try {
			let formData: any = { ...payload };  // this should be changed, should not be any
			formData.password = SHA512(formData.password).toString()
			const res = await authService.login(formData);
			this.setLoggedUser(res.data)
			localStorage.setItem(TOKEN_LS_NAME, res.data['session-id']);
			return Promise.resolve(res);
		} catch (error) {
			return Promise.reject(error);
		}
	}
	@Action({ rawError: true })
	async logout() {
		try {
			const res = await authService.logout();
			this.setLoggedUser(null);
			return '/login';
		} catch (error) {
			return Promise.reject(error);
		}
	}

	@Action({ rawError: true })
	async fetchActiveAccount() {
		try {
			const res = await authService.fetchActiveAccount();
			this.setLoggedUser(res.data)
			return res;
		} catch (error) {
			return Promise.reject(error);
		}
	}

	// @Action({ rawError: true })
	// async register({}, payload) {
	// 	try{
	// 		let formData = { ...payload };
	// 		formData.password = SHA512(formData.password).toString()
	// 		const res = await authService.register(formData);
	// 		return Promise.resolve(res);
	// 	} catch(error) {
	// 		return Promise.reject(error);
	// 	}
	// }

	// END :: actions
}
export default getModule(AuthModule)