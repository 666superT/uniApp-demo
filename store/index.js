import Vuex from 'vuex'
import Vue from 'vue'
import {
	TOKEN_KEY,
	USER_KEY
} from '@/config/storageKey'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: uni.getStorageSync(TOKEN_KEY) || "",
		user: JSON.parse(uni.getStorageSync(USER_KEY) || "{}")
	},
	getters: {},
	mutations: {
		SET_USER(state, res) {
			state.user = res.data
			state.token = res.data.token

			uni.setStorageSync('TOKEN_KEY', res.data.token)
			uni.setStorageSync('USER_KEY', JSON.stringify(res.data))
		}
	},
	actions: {
		setUserInfo({
			commit
		}, res) {
			commit('SET_USER', res)
		}
	}
})
