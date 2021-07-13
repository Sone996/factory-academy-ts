<template>
	<div 
        id="course-course-modal"
        class="course-course-modal rounded-lg w-2/12 h-3/12 bg-gray-400 flex flex-row absolute text-tiny felx items-center justify-center"
    >
		<div class="flex items-center justify-between w-full px-8">
			<span @click="cancel()" class="bg-darkRed py-2 px-4 rounded-lg cursor-pointer">Cancel</span>
            <span @click="completeCourse()" class="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer">Complete</span>
		</div>
	</div>
</template>

<script>
import ModalMixin from "../../mixins/ModalMixin";
export default {
	data() {
		return {
            form: {
                courseId: null,
                userId: null,
                teacherId: null,
                complete: true
            }
        };
	},
	props: ["model"],
	mixins: [ModalMixin],
	mounted() {},
	methods: {
        completeCourse() {
            this.form.courseId = this.model.course_id;
            this.form.userId = this.model.student_id;
            this.form.teacherId = this.loggedUser.id;
            this.$store.dispatch('adminStore/completeCourse', this.form).then(res => {
                this.$emit('closeModal');
                this.$store.dispatch('adminStore/fetchAplicationRequests');
            }).catch( err => {
                this.openModal('notification-modal', {
					errMsg: notificationMsg(err),
					successMsg: null,
				});
                this.$emit('closeModal');
             }
            );
        },
        cancel() {
            this.$emit('closeModal');
        }
	},
	computed: {
        loggedUser() {
            return this.$store.getters["authStore/getState"]("loggedUser");
        },
    },
	watch: {},
};
</script>

<style lang="scss" scoped>
.course-course-modal {
	height: 10%;	
}
</style>
