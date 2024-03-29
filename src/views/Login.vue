<template>
  <div class="flex items-center justify-center h-full w-full">
    <div v-if="!register" class="flex flex-col w-4/12 border h-2/3 p-4">
      <div class="flex justify-center">
        <span class="text-3xl">Login</span>
      </div>
      <div class="flex flex-col justify-center mt-8">
        <span>Email</span>
        <input
          class="input"
          type="text"
          autocomplete="off"
          v-model="login.email"
        />
      </div>
      <div class="flex flex-col justify-center mt-4">
        <span>Password</span>
        <input
          class="input"
          type="password"
          autocomplete="new-password"
          v-model="login.password"
        />
      </div>
      <div class="flex mt-4 justify-between">
        <div class="button bg-blue-500 w-1/3" @click="loginSubmit()">Login</div>
        <div class="button bg-darkGreen w-1/3" @click="registerForm()">
          Register
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col w-4/12 border h-2/3 p-4">
      <div class="flex justify-center">
        <span class="text-3xl">Register</span>
      </div>
      <div class="flex flex-col justify-center mt-8">
        <span>First Name</span>
        <input
          class="input"
          type="text"
          autocomplete="off"
          v-model="registerData.name"
        />
      </div>
      <div class="flex flex-col justify-center mt-8">
        <span>Last Name</span>
        <input
          class="input"
          type="text"
          autocomplete="off"
          v-model="registerData.surname"
        />
      </div>
      <div class="flex flex-col justify-center mt-8">
        <span>Email</span>
        <input
          class="input"
          type="text"
          autocomplete="off"
          v-model="registerData.email"
        />
      </div>
      <div class="flex flex-col justify-center mt-8">
        <span>Password</span>
        <input
          class="input"
          type="password"
          autocomplete="new-password"
          v-model="registerData.password"
        />
      </div>
      <div class="flex mt-8">
        <v-select
          label="name"
          class="w-1/4"
          :clearable="false"
          :options="roleOptions"
          v-model="role"
        />
      </div>
      <div class="flex mt-4 justify-between">
        <div class="button bg-darkRed w-1/3" @click="registerForm()">
          Go Back
        </div>
        <div class="button bg-darkGreen w-1/3" @click="registerAction()">
          Register
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ModalMixin from '@/mixins/ModalMixin';
import authModule from '../store/modules/auth/authModule';
import { Register } from '@/store/models';
import { notificationMsg } from "@/services/BaseService";

@Component({
  components: {},
})
export default class Login extends ModalMixin {
	private register = false;
	private login: {} = {
		email: null,
		password: null
	}
	private registerData: Register = {
		name: null,
		surname: null,
		email: null,
		password: null,
		role: null
	}
	private role: any = null
	private roleOptions = [
				{
					name: "Teacher",
					value: 'teacher',
				},
				{
					name: "Student",
					value: 'student',
				},
			]

	mounted() {}

	// computed
	get loggedUser() {
		return authModule.loggedUser;
	}
	// END :: computed

  public openNotificationModal(): any {
    this.openModal('notification-modal', {
					errMsg: null,
					successMsg: 'lOGIN_SUCCESS',
				});
  }

	async loginSubmit() {
		authModule.loginAction(this.login).then(res => {
			if(res.data.role === 'teacher') {
				this.$router.push('/professor-home');
				return;
			} if(res.data.role === 'student') {
				this.$router.push('/student-home');
				return;
			}
		}).catch(err => {
			this.openModal('notification-modal', {
					errMsg: notificationMsg(err, null),
					successMsg: null,
				});
		});
	}

	public registerForm() {
    this.register = !this.register;
  }
	public registerAction() {
    	this.registerData.role = this.role.value;
		authModule.register(this.registerData).then(
			res => {
				this.login = {
					email: this.registerData.email,
					password: this.registerData.password
				}
				this.openModal('notification-modal', {
					errMsg: null,
					successMsg: notificationMsg(res, 'REGISTER_SUCCESS'),
				});
				this.loginSubmit();
			}
		).catch(err => {
			this.openModal('notification-modal', {
					errMsg: notificationMsg(err, null),
					successMsg: null,
				});
		});
  }
}
</script>

<style scoped>
</style>
