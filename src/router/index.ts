import Vue from "vue";
import VueRouter from "vue-router";
//import { ROLES } from "../constants/constants";
//import { routerService } from './router.service'

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: () =>
			import(/* webpackChunkName: "app-layout" */ "../layouts/AppLayout.vue"),
		// children: [
		// 	// user pages
		// 	{
		// 		path: "/home",
		// 		name: "dashboard",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.student],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "user-home" */ "@/views/userViews/UserHome"),
		// 	},
		// 	// END :: user pages

		// 	// professor pages
		// 	{
		// 		path: "/professor-home",
		// 		name: "professor-dashboard",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.professor],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "professor-home" */ "@/views/professorViews/ProfessorHome"),
		// 	},
		// 	{
		// 		path: "/member-list",
		// 		name: "member-list",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.professor],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "member-list" */ "@/views/professorViews/MemberList"),
		// 	},
		// 	{
		// 		path: "/new-course",
		// 		name: "new-course",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.professor],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "new-course" */ "@/views/professorViews/NewCourse"),
		// 	},
		// 	{
		// 		path: "/student-aplications",
		// 		name: "student-aplications",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.professor],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "student-aplications" */ "@/views/professorViews/StudentAplications"),
		// 	},
		// 	// END :: professor pages
		// 	// shared pages
		// 	{
		// 		path: "/course",
		// 		name: "course",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.professor, ROLES.student],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "course" */ "@/views/shared/SingleCourse"),
		// 	},
		// 	{
		// 		path: "/profile",
		// 		name: "profile",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.professor, ROLES.student],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "profile" */ "@/views/shared/Profile"),
		// 	},
		// 	{
		// 		path: "/course-list",
		// 		name: "course-list",
		// 		// beforeEnter: routerService.routerGuards,
		// 		// meta: {
		// 		//   allowedRoles: [ROLES.professor],
		// 		// },
		// 		component: () =>
		// 			//import(/* webpackChunkName: "courseList" */ "@/views/shared/CourseList"),
		// 	},
		// 	// END :: shared pages

		// ],
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
