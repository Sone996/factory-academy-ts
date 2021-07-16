<template>
	<div  id="requrest-accept-modal" class="requrest-accept-modal rounded-lg w-2/12 h-3/12 bg-gray-400 flex flex-row absolute text-tiny felx items-center justify-center">
		<div class="flex items-center justify-between w-full px-8">
			<span @click="resolvingAplication(false)" class="bg-darkRed py-2 px-4 rounded-lg cursor-pointer">Reject</span>
            <span @click="resolvingAplication(true)" class="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer">Accept</span>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ModalMixin from "@/mixins/ModalMixin";
import { RequestAcceptForm } from '@/store/models';
import { notificationMsg } from "@/services/BaseService";
import personModule from '@/store/modules/person/personModule';

@Component({components: {},})
export default class RequrestAcceptModal extends ModalMixin {
	// data
	//public data = null;
    public form: RequestAcceptForm = {
        course_id: null,
        accepted: null,
    }
	// END :: data

    @Prop() model: any | null;

	// computed
	// END :: computed

	// methods
	public resolvingAplication(status: boolean) {
        this.form.course_id = this.model.course_id;
        this.form.accepted = status;
		personModule.resolveRequest(this.form).then(res => {
            this.$emit('closeModal');
			personModule.fetchAplicationRequests();
        }).catch( err => {
            this.openModal('notification-modal', {
				errMsg: notificationMsg(err, null),
				successMsg: null,
			});
            this.$emit('closeModal');
         }
        );
    }
	// END :: methods
}
</script>

<style lang="scss" scoped>
.requrest-accept-modal {
	height: 10%;	
}
</style>
