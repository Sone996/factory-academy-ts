<template>
<div class="flex w-full h-full">
    <div class="flex flex-col h-full bg-gray-500 w-2/12">
        <div class="flex p-16">
            <img src="../assets/images/factoryww.png" alt="logo" class="cursor-pointer" @click="goToHome()">
        </div>
        <div class="flex flex-col text-white font-bold text-lg">
            <span class="my-2 cursor-pointer" @click="goToHome()">Home</span>
            <span class="my-2 cursor-pointer" @click="goToProfile()">Profile</span>
            <span v-if="loggedUser && loggedUser.role === 'teacher'" class="my-2 cursor-pointer" @click="myStudents()">My Students</span>
            <span v-if="loggedUser && loggedUser.role === 'teacher'" class="my-2 cursor-pointer" @click="newCourse()">New Course</span>
            <span v-if="loggedUser && loggedUser.role === 'teacher'" class="my-2 cursor-pointer" @click="CourseList()">Course List</span>
            <span v-if="loggedUser && loggedUser.role === 'teacher'" class="my-2 cursor-pointer" @click="studentAplications()">Student aplications</span>
            <span class="my-2 cursor-pointer" @click="logout()">Logout</span>
        </div>
    </div>
    <div class="flex w-full">
        <router-view />
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TOKEN_LS_NAME } from "@/constants/constants";
import ModalMixin from '@/mixins/ModalMixin';

// modules
import authModule from '@/store/modules/auth/authModule';
import personModule from '@/store/modules/person/personModule';

@Component({
    components: {},
})
export default class AppLayout extends ModalMixin {
    
    mounted() {
        if (!localStorage.getItem(TOKEN_LS_NAME)) {
            this.$router.push('/login');
        }
        if(this.loggedUser.role === 'student') {
            this.notRated();
        }
    }

    // getters
    get loggedUser(): {} | any {
        return authModule.loggedUser;
    }
    // END getters

    // methods
    private notRated() {
		personModule.fetchNotRatedCourses(this.loggedUser.id).then(res => {
            Object.keys(res.data).length > 0 ? this.openModal('rate-course-modal', res.data) : null;
        }).catch();
	}
    public logout() {
        authModule.logout().then((res) => {
            localStorage.removeItem(TOKEN_LS_NAME);
            this.$router.push(res)
        }).catch((err) => {
            console.log(err);
        });
    }
    public goToHome() {
        if (this.loggedUser.role === 'teacher') {
            this.$router.push('professor-home');
        }
        if (this.loggedUser.role === 'student') {
            this.$router.push('student-home');
        }
    }
    public goToProfile() {
        personModule.goProfile(this.loggedUser.id).then(res => {
                this.$router.push({
                    path: '/profile',
                    query: {
                        id: res.data.id
                    }
                })
            }).catch(err => {});
    }
    public newCourse() {
        this.$router.push('/new-course');
    }
    public myStudents() {
        this.$router.push('/member-list');
    }
    public CourseList() {
        this.$router.push('course-list')
    }
    public studentAplications() {
        this.$router.push('student-aplications');
    }
    // END :: methods
}
</script>

<style scoped>
</style>
