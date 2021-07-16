<template>
	<div class="professor-home flex-col flex w-full">
		<div class="flex border-b py-4 px-4 w-full text-xl font-bold">
			<span>All Courses</span>
		</div>
		<div class="flex w-full h-full py-16 pl-5">
            <div class="relative h-full w-3/4">
                <!-- <scroll> -->
			        <simple-table @singleView="singleView" :model='courses' :titles='titles'></simple-table>
                <!-- </scroll> -->
            </div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import simpleTable from '@/components/shared/SimpleTable.vue';
import ModalMixin from '@/mixins/ModalMixin';
import courseModule from '@/store/modules/course/courseModule';

@Component({components: {
	simpleTable
},})
export default class CourseList extends ModalMixin {
	// data
	public titles = ['Id', 'Name', 'Average Mark', 'Price'];
	// END :: data

	mounted() {
        this.fetchCourese();
    }

	// computed
	get courses() {
		return courseModule.allCouresList;
    }
	// END :: computed

	// methods
	fetchCourese() {
		courseModule.fetchAllCourses().then().catch();
    }
	singleView(item: any) {
		this.$router.push({ path: '/course', query: { id: item.id } })
	}
	// END :: methods
}
</script>

<style></style>
