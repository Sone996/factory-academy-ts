import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { authService } from './auth.service'
// import { TOKEN_LS_NAME } from "../constants/constants";
// import SHA512 from "crypto-js/sha512";

@Module({ namespaced: true, name: 'authModule', dynamic: true, store })
class AuthModule extends VuexModule {
	public test: string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaa';

	// getters
	get getTest() {
		return this.test;
	}

	// actions
	@Action({ rawError: true })
	async loginAction(payload: {}) {
		try {
			const res = await authService.login(payload);
			console.log(res);
			return Promise.resolve(res);
		} catch (error) {
			return Promise.reject(error);
		}
		// console.log('store');
		// console.log(payload)
		// const res = await api.get('');
		// return res;
	}
	@Action({ rawError: true })
	testing(): void {
		console.log('dddddd');
	}
}
export default getModule(AuthModule)