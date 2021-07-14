<template>
<div class="course flex w-full">
	<div v-if="course" class="flex flex-col w-1/3 items-start py-4 px-4 border-r text-xl font-bold border-b">
		<div class="flex flex-col w-full items-start">
			<span>Name: {{course ? course.name : ''}}</span>
			<span>Price: {{course ? course.price : ''}}</span>
		</div>
		<div class="flex border whitespace-pre-line h-full overflow-y-auto mb-4">
			<span>{{ course ? course.description : "" }}</span>
		</div>
	</div>
	<div v-if="loggedUser.role === 'teacher'" class="flex flex-col items-center w-2/3">
		<My-students-list :tableData='usersOnCourseList'></My-students-list>
	</div>
	<div v-else class="flex flex-col items-center w-full">
		<Student-part :data="course"></Student-part>
	</div>
</div>
</template>



<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ModalMixin from '../../mixins/ModalMixin';
import {notificationMsg} from "@/services/BaseService";
import authModule from '@/store/modules/auth/authModule';
import courseModule from '@/store/modules/course/courseModule';
// for porfessor
import MyStudentsList from '@/components/teacher/SingelCourseComponent.vue';
// for student
import StudentPart from '@/components/student/SingleCourseStudentComponent.vue';

@Component({components: {
	MyStudentsList,
	StudentPart,
},})
export default class HelloWorld extends ModalMixin {
	// data
	// END :: data

	mounted() {
		if (!this.$route.query.id) {
			this.$router.push('/');
		}
		this.initLoad();
	}

	// computed
	get course() {
		return courseModule.singleCourse;
	}
	get loggedUser(): any {
        return authModule.loggedUser;
    }
	get usersOnCourseList() {
		return courseModule.studentsOnCourseList;
	}
	// END :: computed

	// methods
	public initLoad() {
        let id: any = this.$route.query.id;
		courseModule.fetchSingleCours(id)
            .then(() => {
                this.studentsOnCourse(id);
            }).catch(err => {
                this.openModal('notification-modal', {
                    errMsg: notificationMsg(err, null),
                    successMsg: null,
                });
            })
    }
    public studentsOnCourse(id: number) {
		courseModule.studentsOnCourse({course_id: id})
        .then().catch( err => {
            console.log('eeeeeeeeeeeeeeeeeeee ', err)
        });
    }
	// END :: methods
}
</script>

<style scoped lang="scss">
</style>
