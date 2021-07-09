import Vue from 'vue';
import { TOKEN_LS_NAME } from "@/constants/constants";
import store from '@/store'
import authModule from '@/store/modules/auth/authModule';

class Router {
	routerGuards(to: any, from: any, next: any) {
		const token = localStorage.getItem(TOKEN_LS_NAME);
		// store.dispatch('authStore/fetchActiveAccount')
        authModule.fetchActiveAccount()
		.then((res) => {
			const role = res.data.role;
			Vue.prototype.$role = res.data.role;
			store.commit('authModule/setLoggedUser', res.data);
			if (!token) {
				next("/login");
			}
			if(token && role && to.meta.allowedRoles.includes(role)) {
				next();
			} else {
				if(!token) {
					next("/login");
				} else {
					if(role && role === 'teacher' && to.path === '/') {
						next({ name: 'professor-home' });
					} else {
						next({ name: "error" });
					}
				}
			}
		})
		.catch(() => {
			next("/login");
		})


        //----------------------------------------------------------------
		// if(token && to.meta.allowedRoles.includes(token.role)) {
		// 	next();
		// } else {
		// 	if(!token) {
		// 		next("/login");
		// 	} else {
		// 		if (token && token.role === 'professor' && to.path === '/') {
		// 			next({ name: 'professor-home' });
		// 		} else {
		// 			next({ name: "error" });
		// 		}
		// 	}
		// }


	}
}
export const routerService = new Router();
