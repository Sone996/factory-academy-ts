<template>
  <div id="finishing-course-modal" class="course-course-modal rounded-lg w-2/12 h-3/12 bg-gray-400 flex flex-row absolute text-tiny felx items-center justify-center">
    <div class="flex items-center justify-between w-full px-8">
      <span @click="cancel()" class="bg-darkRed py-2 px-4 rounded-lg cursor-pointer">Cancel</span>
      <span @click="completeCourse()" class="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer">Complete</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ModalMixin from "@/mixins/ModalMixin";
import { FinishCourseModel } from "@/store/models";
import { notificationMsg } from "@/services/BaseService";
import authModule from "@/store/modules/auth/authModule";
import courseModule from "@/store/modules/course/courseModule";
import personModule from "@/store/modules/person/personModule";

@Component({ components: {} })
export default class FinishingCOurseModal extends ModalMixin {
  // data
  public form: FinishCourseModel = {
    courseId: null,
    userId: null,
    teacherId: null,
    complete: true,
  };
  // END :: data

  @Prop() model: any | null;

  mounted() {}

  // computed
  get loggedUser(): any {
    return authModule.loggedUser;
  }
  // END :: computed

  // methods
  public completeCourse(): void {
	this.form.courseId = this.model.course_id;
	this.form.userId = this.model.student_id;
	this.form.teacherId = this.loggedUser.id;
	courseModule.completeCourse(this.form).then(() => {
	    this.$emit("closeModal");
	    personModule.fetchAplicationRequests();
	  })
	  .catch((err) => {
	    this.openModal("notification-modal", {
	      errMsg: notificationMsg(err, null),
	      successMsg: null,
	    });
	    this.$emit("closeModal");
	  });
	}
	public cancel(): void {
    	this.$emit("closeModal");
	}
  // END :: methods
}
</script>

<style lang="scss" scoped>
.course-course-modal {
  height: 10%;
}
</style>
