<template>
<div id="app" class="relative w-screen h-screen overflow-hidden flex">
    <Loader v-if="loader"></Loader>
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
import {
    Component,
    Vue
} from "vue-property-decorator";

// modules
import global from "./store/modules/global/globalModule";

// components
import Loader from "./components/shared/Loader.vue";

@Component({
    components: {
        Loader,
    },
})
export default class App extends Vue {
    mounted() {}
    get loader(): boolean {
        return global.getLoader;
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
