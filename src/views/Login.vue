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
        <div class="button bg-blue-500 w-1/3" @click="loginAction()">Login</div>
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
          v-model="login.name"
        />
      </div>
      <div class="flex flex-col justify-center mt-8">
        <span>Last Name</span>
        <input
          class="input"
          type="text"
          autocomplete="off"
          v-model="login.surname"
        />
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
      <div class="flex flex-col justify-center mt-8">
        <span>Password</span>
        <input
          class="input"
          type="password"
          autocomplete="new-password"
          v-model="login.password"
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
// modules
import { namespace } from "vuex-class";
const auth = namespace("authModule");

@Component({
  components: {},
})
export default class Login extends Vue {
	private register = false;
	private login: {} = {
		email: null,
		password: null
	}
	private role = null
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

	@auth.State
	public test!: string;

	mounted() {
		// to check if module is connected
		console.log(this.test);
	}

	// this is problem
	loginAction() {
		auth.loginAction(this.login);
	}

	public registerForm() {}
	public registerAction() {}
}
</script>

<style scoped>
</style>
