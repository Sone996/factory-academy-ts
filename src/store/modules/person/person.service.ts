import { personRepo } from "./person.repo";

class PersonService {
    fetchMyCourses(data: number) {
        return personRepo.fetchMyCourses(data);
    }

    goProfile(id: number) {
        return personRepo.goProfile(id);
    }

    // fetchNotCompletedCourses() {
    //     return personRepo.fetchNotCompletedCourses();
    // }

    fetchCompletedCourses(id: number) {
        return personRepo.fetchCompletedCourses(id);
    }

    fetchMyStudents() {
        return personRepo.fetchMyStudents();
    }
}

export const personService = new PersonService();