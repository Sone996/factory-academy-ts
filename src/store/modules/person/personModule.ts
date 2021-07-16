import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { personService } from './person.service'

@Module({ namespaced: true, name: 'personModule', dynamic: true, store })
class PersonModule extends VuexModule {

	public myCourses: {} | null = null;
    public profileData: {} | null = null;
    public completedCourses: [] | {} | null = null;
    public myStudents: [] | {} | null = null;
    public aplicationRequests: [] | {} | null = null;
    public notCompletedCourses: [] | {} | null = null;

	// getters
    get getMyCourses() {
        return this.myCourses;
    }
    get getNotCompletedCourses() {
        return this.notCompletedCourses;
    }
	// END :: getters

	// mutations
    @Mutation
    public setProfileData(profileData: {}) {
        this.profileData = profileData;
    }

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

    @Mutation
    parseMyStudents(myStudents: [] | any): void {
        if(!myStudents) {
            return;
        }
        myStudents.forEach((student: {}, i: number) => {
            myStudents[i] = {
                user_id: myStudents[i].user_id,
                user: myStudents[i].user,
                course_name: myStudents[i].course_name,
                course_start_date: myStudents[i].course_start_date
            }
        })
        this.myStudents = myStudents;
    }

    @Mutation
    public parseCompletedCourses(completedCourses: [] | any): void {
        if(!completedCourses) {
            return;
        }
        completedCourses.forEach((course: {}, i: number) => {
            completedCourses[i] = {
                course_id: completedCourses[i].course.id,
                course_name: completedCourses[i].course.name,
                mark: completedCourses[i].mark,
            }
        })
        this.completedCourses = completedCourses;
    }

    @Mutation
    public parseAplicationRequests(aplicationRequests: [] | any): void {
        if(!aplicationRequests) {
            return;
        }
        aplicationRequests.forEach((aplication: {}, i: number) => {
            aplicationRequests[i] = {
                student_id: aplicationRequests[i].student_id,
                course_id: aplicationRequests[i].course_id,
                accepted: aplicationRequests[i].accepted,
            }
        });
        this.aplicationRequests = aplicationRequests;
    }

    @Mutation
    public parsenotCompletedCourses(notCompletedCourses: [] | any): void  {
        if(!notCompletedCourses) {
            return;
        }
        notCompletedCourses.forEach((course: {}, i: number) => {
            notCompletedCourses[i] = {
                course_id: notCompletedCourses[i].course_id,
                course_name: notCompletedCourses[i].course_name,
                teacher_name: notCompletedCourses[i].teacher_name,
                average_mark: notCompletedCourses[i].average_mark,
                price: notCompletedCourses[i].price
            }
        })
        this.notCompletedCourses = notCompletedCourses;
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

    @Action({ rawError: true })
    async goProfile(payload: number) {
        try {
            const res = await personService.goProfile(payload);
            this.setProfileData(res.data);
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async fetchMyStudents() {
        try {
            const res = await personService.fetchMyStudents();
            this.parseMyStudents(res.data);
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async fetchNotCompletedCourses() {
        try {
            const res = await personService.fetchNotCompletedCourses();
            this.parsenotCompletedCourses(res.data);
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async fetchCompletedCourses(id: number) {
        try {
            const res = await personService.fetchCompletedCourses(id);
            this.parseCompletedCourses(res.data);
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async fetchAplicationRequests() {
        try {
            const res = await personService.fetchAplicationRequests();
            this.parseAplicationRequests(res.data);
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async resolveRequest(payload: any) {
        try {
            const res = personService.resolveRequest(payload);
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }
	// END :: actions
}
export default getModule(PersonModule)