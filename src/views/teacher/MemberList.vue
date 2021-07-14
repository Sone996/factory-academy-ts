<template>
	<div class="member-list flex-col flex w-full">
		<div class="flex border-b py-4 px-4 w-full text-xl font-bold">
			<span>My Students</span>
		</div>
		<div class="flex w-full justify-center mt-16">
			<simple-table @singleView="singleView" :model='myStudents' :titles='titles'></simple-table>
		</div>
	</div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import simpleTable from '@/components/shared/SimpleTable.vue';
import personModule from '@/store/modules/person/personModule';

@Component({components: {
	simpleTable
},})
export default class MemberList extends Vue {
	// data
	titles = ['Id', 'Student', 'Course', 'Date of Start'];
	// END :: data

	mounted() {
		this.fetchMyStudents();
	}

	// computed
	get myStudents() {
		return personModule.myStudents;
	}
	// END :: computed

	// methods
	fetchMyStudents() {
		personModule.fetchMyStudents().then(() => {
        }).catch(() => {
        });
	}
	singleView(item: any) {
		this.$router.push({ path: '/profile', query: { id: item.user_id } })
	}
	// END :: methods
}
</script>

<style scoped lang="scss">
</style>

