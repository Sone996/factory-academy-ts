<template>
	<div id="notification-modal" class="notification-modal rounded-lg w-2/12 flex flex-row absolute text-tiny felx items-center justify-center goIn"
		:class="model.errMsg ? 'bg-red' : 'bg-green'"
	>
		<div class="flex items-center justify-between w-full px-8">
			<span :class="model.errMsg ? 'text-darkRed' : 'text-darkGreen'">{{model.errMsg ? model.errMsg : model.successMsg}}</span>
			<i v-if="model.successMsg" class="fa fa-check text-darkGreen text-3xl" aria-hidden="true"></i>
			<i v-else class="fa fa-exclamation-triangle text-darkRed text-3xl" aria-hidden="true"></i>
		</div>
	</div>
</template>

<script lang="ts">
// import ModalMixin from "../../mixins/ModalMixin";
import { Component, Vue, Mixins, Prop } from "vue-property-decorator";
import ModalMixin from '@/mixins/ModalMixin';



@Component({
  components: {},
})
export default class NotificationModal extends ModalMixin {

	@Prop() model: any | null;

	mounted() {
		setTimeout(() => {
			this.changeClass()
		}, 3000);
	}

	public changeClass(): void {
		let elem = document.getElementById('notification-modal');
		if(elem) {
			elem.classList.remove("goIn");
			elem.classList.add("goOut");
			setTimeout(() => {
				this.$emit('closeModal')
				},450)
		}
	}

}
</script>

<style lang="scss" scoped>
.notification-modal {
	right: 2%;
	bottom: 2%;
	height: 10%;	
}
.goIn{
	animation: comein 0.5s;
	animation-iteration-count: 1;
  	animation-timing-function: linear;
}
.goOut{
	animation: comeout 0.5s;
	animation-iteration-count: 1;
  	animation-timing-function: linear;
}
@keyframes comein {
  from {
	  opacity: 0;
	  transform: translateX(100%); 
	  }
  to {
	  opacity: 1;
	  transform: translateX(0);
	  }
}
@keyframes comeout {
  from {
	  opacity: 1;
	  transform: translateX(0);
	  }
  to {
	  opacity: 0;
	  transform: translateX(100%);
	  }
}
</style>
