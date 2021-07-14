<template>
	<div class="profile flex flex-col w-full h-full">
		<div v-if="userData" class="flex flex-col items-start p-6 text-xl border-b">
			<span>Name: {{userData.name}}</span>
			<span>Surname: {{userData.surname}}</span>
			<span>Email: {{userData.email}}</span>
			<span>Role: {{userData.role}}</span>
		</div>
		<div class="flex flex-col h-full">
			<Teacher-profile-component v-if="loggedUser.role === 'teacher'"></Teacher-profile-component>
			<Student-profile-component v-else></Student-profile-component>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import authModule from '@/store/modules/auth/authModule';
import personModule from '@/store/modules/person/personModule';
import TeacherProfileComponent from '@/components/teacher/TeacherProfileComponent.vue';
import StudentProfileComponent from '@/components/student/StudentProfileComponent.vue';


@Component({components: {
	TeacherProfileComponent,
	StudentProfileComponent,
},})

export default class Profile extends Vue {

	// data
	// END :: data

	mounted() {
		if (!this.$route.query.id) {
			this.$router.push("/");
		}
		this.initLoad();
	}

	// computed
	get userData() {
		return personModule.profileData;
	}
	get loggedUser(): any {
        return authModule.loggedUser;
    }
	// END :: computed

	// methods
	initLoad() {
		if(!this.userData) {
			personModule.goProfile(this.loggedUser.id).then(() => {
			}).catch(() => {
			})
		}
	}
	// END :: methods
	
}
</script>

<style></style>
