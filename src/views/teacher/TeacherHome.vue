<template>
<div class="professor-home flex-col flex w-full">
		<div class="flex border-b py-4 px-4 w-full text-xl font-bold">
			<span>My Courses</span>
		</div>
		<div class="flex w-full h-full py-16 pl-5">
            <div class="relative h-full w-3/4">
                <Scroll>
			        <simple-table @singleView="singleView" :model='myCourses' :titles='titles'></simple-table>
                </Scroll>
            </div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import simpleTable from '@/components/shared/SimpleTable.vue';
import ModalMixin from '../../mixins/ModalMixin';
import { notificationMsg } from "@/services/BaseService";
import authModule from '@/store/modules/auth/authModule';
import personModule from '@/store/modules/person/personModule'


@Component({components: {
	simpleTable,
},})
export default class ProfessorHome extends ModalMixin {
	// data
	private titles: any = ['Id', 'Name', 'Average Mark', 'Price'];
	// END :: data

	mounted() {
		this.loggedUser ? this.fetchMyCourses() : null;
	}
	// computed
	get myCourses() {
		return personModule.getMyCourses;
	}
	get loggedUser(): any {
		return authModule.loggedUser;
	}
	// END :: computed

	// methods
		public fetchMyCourses() {
			personModule.fetchMyCourses(this.loggedUser.id).then(res => {
			})
			.catch(err => {
				this.openModal('notification-modal', {
					errMsg: notificationMsg(err, null),
					successMsg: null,
				});
			}
			);
		}
		public singleView(item: any) {
			this.$router.push({ path: '/course', query: { id: item.id } })
		}
	// END :: methods
}
</script>

<style scoped lang="scss">
</style>