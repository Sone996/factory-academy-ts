import { api } from '@/api/api';
const ROUTES = {
    COURSE: '/course',
    COURSES: '/courses',
    TEACHER: '/teacher',
    STUDENTS: '/students',
    STUDENT: '/student',
    REQUEST_COURSE: '/request_course',
};

class PersonRepo {
    // createCourse(data) {
    //     return api.post(ROUTES.COURSES, data);
    // }

    // fetchSingleCours(data) {
    //     const URL = `${ROUTES.COURSES}/${data}`;
    //     return api.get(URL);
    // }

    // fetchAllCourses() {
    //     return api.get(ROUTES.COURSES);
    // }

    fetchMyCourses(id: number) {
        const URL = `${ROUTES.TEACHER}/${id}${ROUTES.COURSES}`;
        return api.get(URL);
    }

    // fetchMyStudents() {
    //     return api.get(ROUTES.STUDENTS);
    // }

    // fetchAplicationRequests() {
    //     const URL = `${ROUTES.TEACHER}${ROUTES.REQUEST_COURSE}`;
    //     return api.get(URL);
    // }

    // resolveRequest(data) {
    //     const URL = `${ROUTES.TEACHER}${ROUTES.REQUEST_COURSE}/${data.courseId}`;
    //     return api.post(URL, data.data);
    // }

    // completeCourse(data) {
    //     const URL = `${ROUTES.STUDENT}/${data.userId}${ROUTES.COURSE}/${data.courseId}${ROUTES.TEACHER}/${data.teacherId}`;
    //     return api.patch(URL, data.data);
    // }
}

export const personRepo = new PersonRepo();
