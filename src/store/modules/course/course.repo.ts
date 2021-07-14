import { api } from '@/api/api';
import queryString from 'query-string';
const ROUTES = {
    STUDENTS: '/students',
    STUDENT: '/student',
    REQUEST_COURSE: '/request_course',
    COURSE: '/course',
    COURSES: '/courses',
    TEACHER: '/teacher',
};

class CourseRepo {
    studentsOnCourse(data: {}) {
        const query = queryString.stringify(data)
        return api.get(`${ROUTES.STUDENTS}?${query}`)
    }

    buyCourse(data: any) {
        const URL = `${ROUTES.STUDENT}${ROUTES.REQUEST_COURSE}/${data.id}`;
        return api.post(URL, data.data);
    }

    // createCourse(data) {
    //     return api.post(ROUTES.COURSES, data);
    // }

    fetchSingleCours(data: number) {
        const URL = `${ROUTES.COURSES}/${data}`;
        return api.get(URL);
    }

    // fetchAllCourses() {
    //     return api.get(ROUTES.COURSES);
    // }

    // fetchMyCourses(id) {
    //     const URL = `${ROUTES.TEACHER}/${id}${ROUTES.COURSES}`;
    //     return api.get(URL);
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

export const courseRepo = new CourseRepo();
