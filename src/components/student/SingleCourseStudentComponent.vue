<template>
    <div class="single-course-component flex flex-col text-xl w-full">
        <div class="felx flex-col justify-between px-6">
            <div class="flex py-10">
                <textarea v-model="form.comment" class="border resize-none w-full rounded p-3" rows="10" placeholder="Message for professor"></textarea>
            </div>
            <div class="flex">
                <span class="button bg-darkGreen" @click="buyCourse()">BUY</span>
            </div>
        </div>
    </div>
</template>




<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ModalMixin from '@/mixins/ModalMixin';
import { notificationMsg } from "@/services/BaseService";
import { BuyCourse } from '@/store/models';
import courseModule from '@/store/modules/course/courseModule';

@Component({components: {},})
export default class HelloWorld extends ModalMixin {
	// data
	public form: BuyCourse = {
        id: null,
        comment: null
    };
	// END :: data

    @Prop() data: any;

	// computed
	// get smth() {
		// return moduleName.dataName;
	// }
	// END :: computed

	// methods
    public buyCourse() {
        this.form.id = this.data.id
        courseModule.buyCourse(this.form).then((res) => {
            this.openModal('notification-modal', {
				errMsg: null,
				successMsg: notificationMsg(res, 'COURSE_APPLYED_SUCCESS'),
			});
            this.form.comment = null;
        }).catch((err) => {
			this.openModal('notification-modal', {
				errMsg: notificationMsg(err, null),
				successMsg: null,
			});
        });
    }
	// END :: methods
}
</script>

<style scoped lang="scss">
</style>
