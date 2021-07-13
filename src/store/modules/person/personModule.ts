import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { personService } from './person.service'

@Module({ namespaced: true, name: 'personModule', dynamic: true, store })
class PersonModule extends VuexModule {

	public myCourses: {} | null = null;

	// getters
    get getMyCourses() {
        return this.myCourses;
    }
	// END :: getters

	// mutations
    @Mutation
    public parseMyCourses(myCourses: [] | any): void {
        if(!myCourses) {
            return;
        }
        myCourses.forEach((course: {}, i: number) => {
            myCourses[i] = {
                id: myCourses[i].id,
                name: myCourses[i].name,
                average_mark: myCourses[i].average_mark,
                price: myCourses[i].price
            }
        })
        this.myCourses = myCourses;
    }

	// END :: mutation

	// actions
    @Action({ rawError: true })
    async fetchMyCourses(payload: any) {
        try {
            const res = await personService.fetchMyCourses(payload);
            this.parseMyCourses(res.data);
            return Promise.resolve(res);
        } catch(error) {
            return Promise.reject(error);
        }
    }
	// END :: actions
}
export default getModule(PersonModule)