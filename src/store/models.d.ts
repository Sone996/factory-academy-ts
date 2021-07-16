export interface Login {
    email: string
    password: string
}

export interface Register {
    name: null,
    surname: null,
    email: null,
    password: null,
    role: null
}
export interface ModelData {
    name: string | null
    data?: {} | null
}

export interface BuyCourse {
    id: number | null,
    comment: string | null
}

export interface NewCourseModel {
    name: null,
	price: null,
	description?: null,
}

export interface FinishCourseModel {
    courseId: null,
    userId: null,
    teacherId: null,
    complete: boolean
}

export interface RequestAcceptForm {
    course_id: null,
    accepted: null | boolean
}

export interface RateCourse {
    comment: null | string,
    mark: number | null,
    personId: null | number,
}