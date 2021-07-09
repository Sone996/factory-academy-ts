import { Module, VuexModule, getModule, Action } from 'vuex-module-decorators'
import { api } from '../../../api/api';
import store from '@/store'

// this is undefined!!!!!
console.log(store)
@Module({ dynamic: true, store, name: 'authModule', namespaced: true })
class AuthModule extends VuexModule {
	public test: string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaa';

		get getTest() {
			return this.test;
		}
	
		@Action({rawError: true})
		async loginAction(payload: {}) {
			console.log('store');
			//const res = await api.get('');
			//return res;
		}
}
const myMod = getModule(AuthModule)
export default myMod