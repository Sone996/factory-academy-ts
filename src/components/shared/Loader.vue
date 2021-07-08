<template>
	<div class="loader absolute w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
		<div class="flex img-container justify-center">
			<img class="img animate-pulse" src="../../assets/images/factoryww.png" alt="logo"/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Loader extends Vue {}
</script>

<style lang='scss' scoped>
.loader {
	z-index: 2;
	.img-container {
		width: 25%;
		height: 25%;
	}
}
</style>
