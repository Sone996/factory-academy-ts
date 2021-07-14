<template>
<div class="course flex w-full">
    <!-- <div v-if="course" class="flex flex-col w-1/3 items-start py-4 px-4 border-r text-xl font-bold border-b">
        <div class="flex flex-col w-full items-start">
            <span>Name: {{course ? course.name : ''}}</span>
            <span>Price: {{course ? course.price : ''}}</span>
        </div>
        <div class="flex border whitespace-pre-line h-full overflow-y-auto mb-4">
            <span>{{ course ? course.description : "" }}</span>
        </div>
    </div>
    <div v-if="loggedUser.role === 'teacher'" class="flex flex-col items-center w-2/3">
        <My-students-list :data='usersOnCourseList'></My-students-list>
    </div>
    <div v-else class="flex flex-col items-center w-full">
        <Student-part :data="course"></Student-part>
    </div> -->
</div>
</template>

<script>
// import ModalMixin from '../../mixins/ModalMixin';
// import {notificationMsg} from "../../services/BaseServices";
// // for porfessor
// import MyStudentsList from '../../components/professorComponents/SingelCourseComponent';
// // for student
// import StudentPart from '../../components/userComponents/SingleCourseStudentComponent';
// export default {
//     name: 'course',
//     components: {
//         MyStudentsList,
//         StudentPart,
//     },
//     data() {
//         return {};
//     },
//     mixins: [ModalMixin],
//     mounted() {
//         if (!this.$route.query.id) {
//             this.$router.push('/');
//         }
//         this.initLoad();
//     },
//     methods: {
//         initLoad() {
//             let id = this.$route.query.id;
//             this.$store.dispatch('adminStore/fetchSingleCours', id)
//                 .then(() => {
//                     this.studentsOnCourse(id);
//                 }).catch(err => {
//                     this.openModal('notification-modal', {
//                         errMsg: notificationMsg(err),
//                         successMsg: null,
//                     });
//                 })
//         },
//         studentsOnCourse(id) {
//             this.$store.dispatch('courseStore/studentsOnCourse', {course_id: id})
//             .then(res => {
//             }).catch( err => {
//                 console.log('eeeeeeeeeeeeeeeeeeee ', err)
//             });
//         },
//     },
//     computed: {
//         course() {
//             return this.$store.getters['adminStore/getState']('singleCours');
//         },
//         loggedUser() {
//             return this.$store.getters["authStore/getState"]("loggedUser");
//         },
//         usersOnCourseList() {
//             return this.$store.getters["courseStore/getState"]('studentsOnCourseList');
//         },
//     },
//     watch: {},
// };
</script>

<style></style>
