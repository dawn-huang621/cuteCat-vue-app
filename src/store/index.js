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
    addShopList: state => {
        // map()方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
        return state.add.map(({ id, num }) => {
            let product = state.shop_list.find(n => n.id == id)// find()方法返回通过测试(函数内判断)的数组的第一个元素的值，如果没有符合条件的元素返回undefined
            if (product) {//    如果存在该商品
                return {//  返回对象
                    ...product,
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