import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import { api } from '../../../api/api';
import store from '@/store'

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
		console.log('store');
		console.log(payload)
		//const res = await api.get('');
		//return res;
	}
	@Action({ rawError: true })
	testing(): void {
		console.log('dddddd');
	}
}
export default getModule(AuthModule)