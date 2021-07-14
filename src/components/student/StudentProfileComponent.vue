<template>
	<div class="user-profile-component flex flex-col h-full">
		<div class="flex flex-col text-xl h-full pt-6">
			<div class="flex pl-6">
				<span>My Completed Courses</span>
			</div>
			<div class="flex flex-col justify-center h-full p-16">
				<div class="relative h-full w-full">
					<!-- <Scroll> -->
					    <simple-table :model='courses' :titles='titles'></simple-table>
            		<!-- </Scroll> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import simpleTable from '@/components/shared/SimpleTable.vue';
import ModalMixin from '@/mixins/ModalMixin';
import authModule from '@/store/modules/auth/authModule';
import personModule from '@/store/modules/person/personModule';

@Component({components: {
	simpleTable
},})
export default class HelloWorld extends ModalMixin {
	// data
	public titles =  ['Id', 'Course Name', 'Mark'];
	// END :: data

	mounted() {
		this.fetchCompletedCourese();
	}

	// computed
	get courses() {
		return personModule.completedCourses;
	}
	get loggedUser(): any {
        return authModule.loggedUser;
    }
	// END :: computed

	// methods
	public fetchCompletedCourese() {
		let id = this.loggedUser.id;
		personModule.fetchCompletedCourses(id).then().catch();
	}
	// END :: methods
}
</script>

<style scoped lang="scss">
</style>