<template>
	<div class="student-aplications flex-col flex w-full">
		<div class="flex border-b py-4 px-4 w-full text-xl font-bold">
			<span>Students</span>
		</div>
        <div class="flex w-full mt-4">
            <span class="button bg-darkGreen ml-4" @click="getActive()">Active</span>
            <span class="button bg-darkGreen ml-4" @click="getInactive()">Inactive</span>
        </div>

		<div class="flex flex-col justify-center h-full p-16">
			<div class="relative h-full w-full">
				<!-- <scroll> -->
				    <simple-table @singleView="singleView" :model='model' :titles='titles'></simple-table>
        		<!-- </scroll> -->
			</div>
		</div>




		<!-- <div class="flex w-full justify-center mt-16">
			<simple-table @singleView="singleView" :model='model' :titles='titles'></simple-table>
		</div> -->
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import simpleTable from '@/components/shared/SimpleTable.vue';
import ModalMixin from '@/mixins/ModalMixin';
import personModule from '@/store/modules/person/personModule';
import globalModule from "@/store/modules/global/globalModule";

@Component({components: {
	simpleTable
},})
export default class StudentAplications extends ModalMixin {
	// data
	public titles = ['Student Id', 'COurse Id', 'Accept'];
	public model: any = null;
	// END :: data

		mounted() {
			this.fetchMyStudents();
			this.aplications ? this.getActive() : null;
		}

	// computed
		get aplications(): any {
			return personModule.aplicationRequests;
		}
	// END :: computed

	// methods
		public fetchMyStudents() {
			personModule.fetchAplicationRequests().then(() => {
            }).catch(() => {
            });
		}
		// public singleView(item: any): void {
		// 	this.$router.push({ path: '/profile', query: { id: item.user_id } })
		// }
		public getActive(): void {
			var active: any = [];
			var i: number = 0;
			this.aplications.forEach((aplication: any) => {
				if(aplication.accepted === true) {
					active[i] = aplication;
					i++;
				}
			});
			this.model = active;
		}
		public getInactive() {
			var inactive: any = [];
			var i: number = 0;
			this.aplications.forEach((aplication: any) => {
				if(aplication.accepted === false) {
					inactive[i] = aplication;
					i++;
				}
			});
			this.model = inactive;
		}
		public singleView(item: any) {
			if(item.accepted === true) {
				globalModule.setOverlay(true);
				this.openModal('finishing-course-modal', item);
			} else {
				globalModule.setOverlay(true);
				this.openModal('requrest-accept-modal', item);
			}
		}
	// END :: methods
}
</script>

<style></style>
