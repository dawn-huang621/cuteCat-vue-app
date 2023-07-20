import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    addCat(context, value){
        // console.log(context, value)
        context.commit('ADDCAT', value)
    },

}
const mutations = {
    ADDCAT(state, number){
        console.log(state, number)
        state.numberOfCats += number
    }
}

const state = {
    numberOfCats: 0,
}
export default new Vuex.Store  ({
    actions,
    mutations,
    state
})