<template>
    <div class="single-course-component flex flex-col text-xl">
        <span class="py-4">Students on this course</span>
        <simple-table :model='tableData' :titles='titles'></simple-table>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import simpleTable from '@/components/shared/SimpleTable.vue';

@Component({components: {
  simpleTable
},})
export default class SingelCourseComponent extends Vue {
	// data
	public titles = ['User Id', 'User', 'Course Start Date', 'Complete'];
	// END :: data

	@Prop(Array) readonly tableData: any;

	// computed
	// END :: computed

	// methods
	// END :: methods
}
</script>

<style scoped lang="scss">
</style>