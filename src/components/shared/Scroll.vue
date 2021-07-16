<template>
  <div class="scroll position-relative overflow-hidden">
    <div class="w-full h-full flex flex-col absolute top-0 left-0 scroll-y">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({components: {},})
export default class Scroll extends Vue {
	// data
	//public data = null;
	// END :: data

	// computed
	// get smth() {
		// return moduleName.dataName;
	// }
	// END :: computed

	// methods
	// END :: methods
}
</script>

<style scoped>
  .scroll-y {
    overflow: scroll !important;
    overflow-x: hidden;
  }

  .overflow-hidden {
    overflow: hidden !important;
  }
  div::-webkit-scrollbar {
    display: none;
  }
</style>
