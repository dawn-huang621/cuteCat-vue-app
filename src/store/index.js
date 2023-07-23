import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    showList({commit}, res){
        fetch('../../public/list.json')
        .then(d => d.json())
        .then(res => {
            console.log("fetch成功")
            commit('SHOWLIST', res)
        });
    },
    addToCart({ commit }, cat) { 
        commit('ADDCAT', cat)
    },
}
const mutations = {
    SHOWLIST(state, res){
        state.catList = res
        state.searchCat = state.catList
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
    },
    SEARCHE(state, searchCat){
        state.searchCat = state.catList.filter(cat=>{
            return cat.name.includes(searchCat)
        })
    }
}
const getters = {
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
    searchCat: [],
    catList: [],
    catCart:[]
}
export default new Vuex.Store  ({
    actions,
    mutations,
    state,
    getters
})