import { api } from '@/api/api';
const ROUTES = {
    COURSE: '/course',
    COURSES: '/courses',
    TEACHER: '/teacher',
    STUDENTS: '/students',
    STUDENT: '/student',
    REQUEST_COURSE: '/request_course',
    USERS: '/users',
    COMPLETE_COURSE: '/complete_course',
};

class PersonRepo {
    goProfile(id: number) {
        return api.get(`${ROUTES.USERS}/${id}`);
    }

    fetchNotCompletedCourses() {
        const URL = `${ROUTES.STUDENT}${ROUTES.COURSES}`;
        return api.get(URL);
    }

    fetchCompletedCourses(id: number) {
        const URL = `${ROUTES.STUDENTS}/${id}${ROUTES.COMPLETE_COURSE}`;
        return api.get(URL)
    }

    fetchMyCourses(id: number) {
        const URL = `${ROUTES.TEACHER}/${id}${ROUTES.COURSES}`;
        return api.get(URL);
    }

    fetchMyStudents() {
        return api.get(ROUTES.STUDENTS);
    }
}

export const personRepo = new PersonRepo();
