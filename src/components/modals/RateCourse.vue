<template>
<div id="rate-course-modal" class="rate-course-modal rounded-lg w-4/12 h-3/12 bg-gray-400 flex flex-col absolute text-tiny felx items-center justify-center">
    <div class="flex items-center justify-center w-full px-8 py-4">
        <span class="font-bold text-xl text-white">Rate Course</span>
    </div>
    <div class="flex flex-col w-full p-4 pt-0">
        <textarea v-model="form.comment" class="border resize-none w-full rounded p-3" rows="5" placeholder="Your ocmment"></textarea>
        <div class="flex w-full p-4 pl-0 items-center">
            <span class="flex font-bold text-white mr-4">Rate here:</span>
            <input v-model="form.mark" class="input" type="text" placeholder="1-5" />
        </div>
        <div class="flex items-center justify-between w-full px-8">
            <span @click="cancel()" class="bg-darkRed py-2 px-4 rounded-lg cursor-pointer text-white">Cancel</span>
            <span @click="completeCourse()" class="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer text-white">Send</span>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "vue-property-decorator";
import ModalMixin from "@/mixins/ModalMixin";
import { RateCourse } from "@/store/models";
import { notificationMsg } from "@/services/BaseService";
import authModule from "@/store/modules/auth/authModule";
import personModule from "@/store/modules/person/personModule";

@Component({
    components: {}
})
export default class RateCourseModal extends ModalMixin {
    // data
    public form: RateCourse = {
        comment: null,
        mark: null,
		personId: null,
    };
    // END :: data

    @Prop() model: any | null;

    mounted() {
    }

    // computed
    get loggedUser(): any {
        return authModule.loggedUser;
    }
    // END :: computed

    // methods
    public completeCourse(): void {
		this.form.personId = this.loggedUser.id;
		personModule.completeCourse(this.form).then(res => {
			console.log('uspeo sam')
			this.openModal('notification-modal', {
					errMsg: null,
					successMsg: notificationMsg(res, 'COURSE_RATED_SUCCESS'),
				});
			this.$emit('closeModal');
		}).catch(err => {
			console.log('nisam uspeo')
			this.openModal('notification-modal', {
				errMsg: notificationMsg(err, null),
				successMsg: null,
			});
            this.$emit('closeModal');
		})
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
