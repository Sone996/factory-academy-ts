import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
@Module({ namespaced: true, name: 'globalModule' })
class GlobalModule extends VuexModule {

	public name: string = 'Radiiiiiiiiii';
	public loader: boolean = false;

	// getters
	get getLoader() {
		return this.loader;
	}

	// mutations
	@Mutation
	public setName(newName: string): void {
		this.name = newName
	}
	@Mutation
	public toggleLoader(loaderStatus: boolean): void {
		this.loader = loaderStatus
	}

	// actions
	@Action
	public activateLoader(payload: boolean): void {
		console.log(payload)
		this.context.commit('toggleLoader', payload)
	}
}
export default GlobalModule