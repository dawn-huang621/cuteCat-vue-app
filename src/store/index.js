import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    showList({commit}, res){
        commit('SHOWLIST', res)
    },
    addToCart({ commit }, cat) { 
        commit('ADDCAT', cat)
    },
}
const mutations = {
    SHOWLIST(state, res){
        state.catList = res
    },
    ADDCAT(state, chooseCat){
        const target = state.catCart.find(cat => cat.name === chooseCat.name);
        if(!target){
            state.catCart.push({
                amount: 1,
                name: chooseCat.name,
                price: chooseCat.price,
                subTotal: chooseCat.price,
            })
        } else {
            target.amount ++,
            target.subTotal += target.subTotal * target.amount
        }
    },
    CLEARTOCART(state){
        state.catCart = []
    }
}
const getters = {
    addShopList: (state) => {
        return state.catCart.map(({ name, amount }) => {
            const target = state.catCart.find(item => item.name === cat.name);
            if (target) {//    如果存在该商品
                return {//  返回对象
                    ...target,
                    amount
                }
            }
        })
    },
    totalCount: (state)=>{
        let total = 0
        state.catCart.forEach((cat) => {
            let countTime = 0
            total += cat.subTotal
        })
        return Math.floor(total) 
    }
}

const state = {
    catList: [],
    catCart:[]
}
export default new Vuex.Store  ({
    actions,
    mutations,
    state,
    getters
})