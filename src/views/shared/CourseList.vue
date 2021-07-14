<template>
	<div class="professor-home flex-col flex w-full">
		<!-- <div class="flex border-b py-4 px-4 w-full text-xl font-bold">
			<span>All Courses</span>
		</div>
		<div class="flex w-full h-full py-16 pl-5">
            <div class="relative h-full w-3/4">
                <scroll>
			        <simple-table @singleView="singleView" :model='courses' :titles='titles'></simple-table>
                </scroll>
            </div>
		</div> -->
	</div>
</template>

<script>
// import simpleTable from '../../components/shared/SimpleTable';
// import ModalMixin from '../../mixins/ModalMixin';
// export default {
// 	name: "professor-home",
// 	components: {
// 		simpleTable,
// 	},
// 	data() {
// 		return {
// 			titles: ['Id', 'Name', 'Average Mark', 'Price'],
// 		};
// 	},
// 	mixins: [ModalMixin],
//     mounted() {
//         this.fetchCourese();
//     },
// 	methods: {
//         fetchCourese() {
//             this.$store.dispatch('adminStore/fetchAllCourses').then().catch();
//         },
// 		singleView(item) {
// 			this.$router.push({ path: '/course', query: { id: item.id } })
// 		}
//     },
// 	computed: {
//         courses() {
//             return this.$store.getters['adminStore/getState']('allCouresList');
//         },
//     },
// 	watch: {},
// };
</script>

<style></style>
