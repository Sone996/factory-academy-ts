<template>
<div id="app" class="relative w-screen h-screen overflow-hidden flex">
    <Loader v-if="loader"></Loader>
    <router-view />
    <!-- modals -->
    <!-- <span class="button bg-green" @click="openNotificationModal()">test</span> -->
    <div v-if="showModal" class="fixed top-0 left-0 h-screen w-screen flex" style="z-index: 2">
		<div class="modal flex items-center justify-center w-full">
			<component :is="getModalObj.name" :model="getModalObj.data" @closeModal="closeModal" />
		</div>
		<div v-if="activeOverlay" class="modal-overlay fixed top-0 left-0 modal-overlay h-screen w-screen flex"></div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// modules
import global from "./store/modules/global/globalModule";
// components
import Loader from "./components/shared/Loader.vue";
// modals
import notificationModal from './components/modals/NotificationModal.vue';
import requrestAcceptModal from './components/modals/RequestAcceptModal.vue';
import finishingCourseModal from './components/modals/FinishingCourseModal.vue';


@Component({
    components: {
        Loader,
        notificationModal,
        finishingCourseModal,
        requrestAcceptModal,
    },
})
export default class App extends Vue {
    mounted() {}
    get loader(): boolean {
        return global.getLoader;
    }
    get showModal(): boolean {
        return global.getModal;
    }
    get activeOverlay(): boolean {
        return global.getOverlay;
    }
    get getModalObj() {
    	return global.modalData;
    }

    public closeModal(): void {
        global.ModalClose(false);
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
.modal-overlay{
	z-index: 1;
    background-color: rgba(0, 0, 0, .6);
}
.modal{
  z-index: 2;
}
</style>
