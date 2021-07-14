import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { courseService } from './course.service'

@Module({ namespaced: true, name: 'courseModule', dynamic: true, store })
class CourseModule extends VuexModule {

	public singleCourse: {} | null = null;
    public studentsOnCourseList: {} | [] | null = null

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
	// END :: mutation

	// actions
    @Action
    async fetchSingleCours(payload: number) {
        try{
            const res = await courseService.fetchSingleCours(payload);
            this.setSingleCourse(res.data);
            return Promise.resolve(res);
        } catch(error) {
            return Promise.reject(error);
        }
    }

    @Action
    async studentsOnCourse(payload: any) {
        try{
            const res = await courseService.studentsOnCourse(payload);
            this.parseStudentsOnCourse(res.data);
            return Promise.resolve(res.data);
        } catch(error){
            return Promise.reject(error);
        }
    }

    @Action
    async buyCourse(payload: {}) {
        try {
            const res = await courseService.buyCourse(payload);
            return Promise.resolve(res);	
        } catch (error) {
            return Promise.reject(error);
        }
    }
	// END :: actions
}
export default getModule(CourseModule)