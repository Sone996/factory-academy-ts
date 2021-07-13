import { personRepo } from "./person.repo";

class PersonService {
    fetchMyCourses(data: number) {
        return personRepo.fetchMyCourses(data);
    }
}

export const personService = new PersonService();