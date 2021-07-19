<template>
	<div class="student-home flex-col flex w-full">
		<div class="flex border-b py-4 px-4 w-full text-xl font-bold">
			<span>Courses List</span>
		</div>
		<div class="flex w-full h-full py-16 pl-5">
            <div class="relative h-full w-3/4">
                <Scroll>
			        <simple-table @singleView="singleView" :model='courses' :titles='titles'></simple-table>
                </Scroll>
            </div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import simpleTable from '@/components/shared/SimpleTable.vue';
import ModalMixin from '@/mixins/ModalMixin';
import personModule from '@/store/modules/person/personModule';

@Component({components: {
	simpleTable
},})
export default class StudentHome extends ModalMixin {
	// data
	private titles = ['Id', 'Course Name', 'Teacher Name', 'Average Mark', 'Price'];
	// END :: data

	mounted() {
		this.fetchCourese();
	}

	// computed
	// get smth() {
		// return moduleName.dataName;
	// }
	get courses() {
		return personModule.getNotCompletedCourses;
    }
	// END :: computed

	// methods
	private fetchCourese() {
		personModule.fetchNotCompletedCourses().then( res => {}).catch( err => {});
    }
	private singleView(item: any) {
		this.$router.push({ path: '/course', query: { id: item.course_id } })
	}
}
	// END :: methods
</script>

<style scoped lang="scss">
</style>