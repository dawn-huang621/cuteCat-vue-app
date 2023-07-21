import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    // addCat(context, cat){
    // },
    countCat(context, cat){
        console.log('泡1')
        context.commit('ADDCAT', cat)
        const target = state.catAll.find(item => item.name === cat.name);
            if(target){
                console.log('沒有相同');
                context.commit('ADDCAT', cat)
            }else{
                console.log('相同');
                context.commit('COUNTCAT', cat)
                context.commit('ADDSAMECAT', cat)
            }
    },
}
const mutations = {
    COUNTCAT(state, cat){
        state.addMount += 1
    },
    ADDCAT(state, cat){
        state.catAll.push({
            amount: 1,
            name: cat.name,
            price: cat.price
        })
        // state.addMount = 0
    },
    ADDSAMECAT(state, cat){
        // state.catAll.push({
        //     amount: state.addMount,
        //     name: cat.name,
        //     price: cat.price
        // })
        // state.addMount = 0
    },
}
const getters = {
    
}

const state = {
    addMount: 0,
    catAll:[]
}
export default new Vuex.Store  ({
    actions,
    mutations,
    state,
    getters
})