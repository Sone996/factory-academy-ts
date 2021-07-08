import { VuexModule, Module, Mutation, Action, MutationAction } from 'vuex-module-decorators';
import { api } from '../../../api/api';
@Module({ namespaced: true, name: 'authModule' })
class authModule extends VuexModule {

	public test: string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaa';

	get getTest() {
		return this.test;
	}


	// @Mutation
	// public setName(newName: string): void {
	// 	this.name = newName
	// }


	// @MutationAction
	// async updatePosts() {
	// 	const posts = await api.get('https://jsonplaceholder.typicode.com/posts')
	// 	return { posts }
	// }

	@MutationAction
	async loginAction(payload: object) {
		console.log('store');
		const res = await api.get('');
		return { test: {} };
		//this.context.commit('setName', newName)
	}
}
export default authModule