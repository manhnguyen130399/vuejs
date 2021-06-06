import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        rs: 0
    },
    getters: {
        tenRs: state => {
            return state.rs * 10;
        }

    },
    mutations: {
        hunIncrementOp(state) {
            state.rs ++
        },
        hunDecrement(state){
            state.rs --
        }
    },
    actions:{
        increment:({commit})=>{
            commit("hunIncrementOp")

        },
        asyncDecrement:({commit})=>{
            setTimeout(()=>{
                commit('hunDecrement')
            },2000)
        }
    }
})