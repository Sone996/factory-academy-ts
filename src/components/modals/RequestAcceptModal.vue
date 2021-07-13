<template>
	<div 
        id="requrest-accept-modal"
        class="requrest-accept-modal rounded-lg w-2/12 h-3/12 bg-gray-400 flex flex-row absolute text-tiny felx items-center justify-center"
    >
		<div class="flex items-center justify-between w-full px-8">
			<span @click="resolvingAplication(false)" class="bg-darkRed py-2 px-4 rounded-lg cursor-pointer">Reject</span>
            <span @click="resolvingAplication(true)" class="bg-darkGreen py-2 px-4 rounded-lg cursor-pointer">Accept</span>
		</div>
	</div>
</template>

<script>
import ModalMixin from "../../mixins/ModalMixin";
export default {
	data() {
		return {
            form: {
                course_id: null,
                accepted: null,
            }
        };
	},
	props: ["model"],
	mixins: [ModalMixin],
	mounted() {},
	methods: {
        resolvingAplication(status) {
            this.form.course_id = this.model.course_id;
            this.form.accepted = status;
            this.$store.dispatch('adminStore/resolveRequest', this.form).then(res => {
                this.$emit('closeModal');
                this.$store.dispatch('adminStore/fetchAplicationRequests')
            }).catch( err => {
                this.openModal('notification-modal', {
					errMsg: notificationMsg(err),
					successMsg: null,
				});
                this.$emit('closeModal');
             }
            );
        }
	},
	computed: {},
	watch: {},
};
</script>

<style lang="scss" scoped>
.requrest-accept-modal {
	height: 10%;	
}
</style>
