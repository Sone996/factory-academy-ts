import Vue from "vue";
import VueRouter from "vue-router";
import { ROLES } from "@/constants/constants";
import { routerService } from './router.service'

Vue.use(VueRouter);

const ROLE: any = ROLES;

const routes = [
	{
		path: "/",
		component: () =>
			import(/* webpackChunkName: "app-layout" */ "../layouts/AppLayout.vue"),
		children: [
			// user pages
			{
				path: "/student-home",
				name: "student-home",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.student],
				},
				component: () =>
					import(/* webpackChunkName: "student-home" */ "@/views/student/StudentHome.vue"),
			},
			// END :: user pages

			// professor pages
			{
				path: "/professor-home",
				name: "professor-dashboard",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.professor],
				},
				component: () =>
					import(/* webpackChunkName: "professor-home" */ "@/views/teacher/TeacherHome.vue"),
			},
			{
				path: "/member-list",
				name: "member-list",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.professor],
				},
				component: () =>
					import(/* webpackChunkName: "member-list" */ "@/views/teacher/MemberList.vue"),
			},
			{
				path: "/new-course",
				name: "new-course",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.professor],
				},
				component: () =>
					import(/* webpackChunkName: "new-course" */ "@/views/teacher/NewCourse.vue"),
			},
			{
				path: "/student-aplications",
				name: "student-aplications",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.professor],
				},
				component: () =>
					import(/* webpackChunkName: "student-aplications" */ "@/views/teacher/StudentAplications.vue"),
			},
		// 	// END :: professor pages
		// 	// shared pages
			{
				path: "/course",
				name: "course",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.professor, ROLE.student],
				},
				component: () =>
					import(/* webpackChunkName: "course" */ "@/views/shared/SingleCourse.vue"),
			},
			{
				path: "/profile",
				name: "profile",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.professor, ROLE.student],
				},
				component: () =>
					import(/* webpackChunkName: "profile" */ "@/views/shared/Profile.vue"),
			},
			{
				path: "/course-list",
				name: "course-list",
				beforeEnter: routerService.routerGuards,
				meta: {
				  allowedRoles: [ROLE.professor],
				},
				component: () =>
					import(/* webpackChunkName: "courseList" */ "@/views/shared/CourseList.vue"),
			},
		// 	// END :: shared pages

		],
	},

	{
		path: "/login",
		name: "login",
		meta: {
			// requiresLoggedUser: false,
			//allowedRoles: Object.values(ROLES),
		},
		component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
	},
	// {
	// 	path: "/error",
	// 	alias: "/*",
	// 	name: "error",
	// 	meta: {
	// 		//allowedRoles: Object.values(ROLES),
	// 	},
	// 	component: () =>
	// 		//import(/* webpackChunkName: "error" */ "@/views/ErrorPage"),
	// },
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

export default router;
