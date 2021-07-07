<template>
  <div id="app" class="relative w-screen h-screen overflow-hidden flex">
		<!-- <loader v-if="toggleLoader"></loader> -->
		<router-view />
		<!-- modals -->
		<!-- <span class="button bg-green" @click="openNotificationModal()">test</span> -->
		<!-- <div v-if="showModal" class="fixed top-0 left-0 h-screen w-screen flex" style="z-index: 2">
    		<div class="modal flex items-center justify-center w-full">
    			<component :is="getModalObj.name" :model="getModalObj.data" @closeModal="closeModal" />
    		</div>
    		<div v-if="activeOverlay" class="fixed top-0 left-0 modal-overlay h-screen w-screen flex"></div>
    	</div> -->
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const user = namespace("globalModule");
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  @user.State
  public name!: string;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
