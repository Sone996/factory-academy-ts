import { courseRepo } from "./course.repo";
import omit from "lodash/omit";
//import { TOKEN_LS_NAME } from "../../constants/constants";

class CourseService {
    studentsOnCourse(data: {}) {
        return courseRepo.studentsOnCourse(data);
    }

    buyCourse(data: any) {
        return courseRepo.buyCourse({
            id: data.id,
            data: omit(data, ['id'])
        });
    }

    createCourse(data: {}) {
        return courseRepo.createCourse(data);
    }
    
    fetchSingleCours(data: number) {
        return courseRepo.fetchSingleCours(data);
    }

    fetchAllCourses() {
        return courseRepo.fetchAllCourses();
    }

    // fetchMyCourses(id) {
    //     return adminRepo.fetchMyCourses(id);
    // }

    completeCourse(data: any) {
        return courseRepo.completeCourse({
            courseId: data.courseId,
            teacherId: data.teacherId,
            userId: data.userId,
            data: omit(data, ['courseId', 'teacherId', 'userId'])
        });
    }
}

export const courseService = new CourseService();