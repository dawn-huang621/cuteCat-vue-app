import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    showList({commit}, res){
        fetch('../../src/assets/list.json')
        .then(d => d.json())
        .then(res => {
            console.log("fetch成功")
            commit('SHOWLIST', res)
        });
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
            target.subTotal = chooseCat.price * target.amount
        }
    },
    CLEARTOCART(state){
        state.catCart = []
    },
    SEARCAT: (state, searchInput) => {
        if(searchInput === ''){
            state.searchCat = state.catList
        } else {
            state.searchCat = state.catList.filter(cat=>{
                return cat.name.includes(searchInput)
            })
            
        }
    }
}
const getters = {
    totalCount: (state)=>{
        let total = 0
        state.catCart.forEach((cat) => {
            total += cat.subTotal 
        })
        return total.toFixed(2);
    },
}

const state = {
    searchCat: [],
    catList: [],
    catCart:[],
}
export default new Vuex.Store  ({
    actions,
    mutations,
    state,
    getters
})