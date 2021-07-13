import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { globalService } from './global.service'
import { ModelData } from '@/store/models'

@Module({ namespaced: true, name: 'globalModule', dynamic: true, store })
class GlobalModule extends VuexModule {

	public name: string = 'Radiiiiiiiiii';
	public loader: boolean = false;
	//for modals
	public activeOverlay: boolean = false;
	public showModal:boolean = false;
	public modalData: ModelData = {
		name: null,
		data: null
	}

	// getters
	get getLoader() {
		return this.loader;
	}
	get getModal() {
		return this.showModal;
	}
	get getOverlay() {
		return this.activeOverlay;
	}
	// END :: getters

	// mutations
	@Mutation
	public setName(newName: string): void {
		this.name = newName
	}
	@Mutation
	public toggleLoader(loaderStatus: boolean): void {
		this.loader = loaderStatus
	}
	@Mutation
	public setModalData(payload: any): void {
		this.modalData.name = payload.modalName
		this.modalData.data = payload.modalData;
	}
	@Mutation
	public toggleModal(status: boolean): void {
		this.showModal = status;
	}
	@Mutation
	public setOverlay(status: boolean): void {
		this.activeOverlay = status;
	}
	// END :: mutations

	// actions
	@Action
	public activateLoader(payload: boolean): void {
		this.context.commit('toggleLoader', payload)
	}
	@Action
	public ModalClose(status: boolean): void {
		this.context.commit('toggleModal', status);
		this.context.commit('setOverlay', status);
		this.context.commit('setModalData', {
			modalName: false,
			modalData: false
		})
	}
	// END :: actions
}
export default getModule(GlobalModule)