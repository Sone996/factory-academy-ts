import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { courseService } from './course.service'

@Module({ namespaced: true, name: 'courseModule', dynamic: true, store })
class CourseModule extends VuexModule {

	public singleCourse: {} | null = null;
    public studentsOnCourseList: {} | [] | null = null;
    public allCouresList: {} | [] | null = null;

	// getters
	// END :: getters

	// mutations
    @Mutation
    setSingleCourse(singleCourse : {}): void {
        this.singleCourse = singleCourse;
    }

    @Mutation
    parseStudentsOnCourse(studentsOnCourseList: any): void {
        if(!studentsOnCourseList) {
            return;
        }
        studentsOnCourseList.forEach((student: {}, i: number) => {
            studentsOnCourseList[i] = {
                id: studentsOnCourseList[i].user_id,
                user: studentsOnCourseList[i].user,
                course_start_date: studentsOnCourseList[i].course_start_date,
                complete: studentsOnCourseList[i].complete
            }
        })
        this.studentsOnCourseList = studentsOnCourseList;
    }

    @Mutation
    parseAllCourses(allCouresList: any): void {
        if(!allCouresList) {
            return;
        }
        allCouresList.forEach((student: {}, i: number) => {
            allCouresList[i] = {
               id: allCouresList[i].id,
               name: allCouresList[i].name,
               average_mark: allCouresList[i].average_mark,
               price: allCouresList[i].price
           }
        });
        this.allCouresList = allCouresList;
    }
	// END :: mutation

	// actions
    @Action({ rawError: true })
    async fetchSingleCours(payload: number) {
        try{
            const res = await courseService.fetchSingleCours(payload);
            this.setSingleCourse(res.data);
            return Promise.resolve(res);
        } catch(error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async studentsOnCourse(payload: any) {
        try{
            const res = await courseService.studentsOnCourse(payload);
            this.parseStudentsOnCourse(res.data);
            return Promise.resolve(res.data);
        } catch(error){
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async buyCourse(payload: {}) {
        try {
            const res = await courseService.buyCourse(payload);
            return Promise.resolve(res);	
        } catch (error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async createCourse(payload: {}) {
        try{
            const res = await courseService.createCourse(payload);
            return Promise.resolve(res);

        } catch(error){
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async fetchAllCourses() {
        try{
            const res = await courseService.fetchAllCourses();
            this.parseAllCourses(res.data);
            return Promise.resolve(res);
        } catch(error) {
            return Promise.reject(error);
        }
    }

    @Action({ rawError: true })
    async completeCourse(payload: {}) {
        try {
            const res = courseService.completeCourse(payload);
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject(error);
        }
    }
	// END :: actions
}
export default getModule(CourseModule)