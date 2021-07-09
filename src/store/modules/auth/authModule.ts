import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { authService } from './auth.service'
// import { TOKEN_LS_NAME } from "../constants/constants";
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
	public setLoggedUser(loggedUser: {}): void {
		this.loggedUser = loggedUser
	}
	// END :: mutation

	// actions
	@Action({ rawError: true })
	async loginAction(payload: {}) {
		try {
			let formData: any = { ...payload };  // this should be changed, should not be any
			formData.password = SHA512(formData.password).toString()
			console.log(formData)
			const res = await authService.login(formData);
			this.setLoggedUser(res.data)
			localStorage.setItem(TOKEN_LS_NAME, res.data['session-id']);
			return Promise.resolve(res);
		} catch (error) {
			return Promise.reject(error);
		}
	}
	@Action({ rawError: true })
	testing(): void {
		console.log('dddddd');
	}
	// END :: actions
}
export default getModule(AuthModule)