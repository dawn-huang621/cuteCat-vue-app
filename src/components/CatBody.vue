<template>
   <div>
        
        <div class="grid grid-cols-6 gap-4 mt-10 mb-10 justify-items-center">
           <div class="cat-card" v-for="(item, index) in searchCat">
             <div class="max-w-sm w-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                 <img class="w-48 rounded-t-lg" :src="item.cover" alt="" />
                 <div class="p-5">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.name }}</h5>
                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">價格: {{ item.price }}</p>
                     <a @click.prevent="buyCat(item)" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         購買
                         <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                         </svg>
                     </a>
                 </div>
             </div>
           </div>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapState } from 'vuex';


export default {
    name: 'CatBody',
    data(){
        return{
        }
    },
    computed:{
        ...mapState(['catList', 'searchCat'])
    },
    methods: {
        buyCat(cat){
            this.$store.commit('ADDCAT',cat)
        },
    },
    mounted(){
        this.$store.dispatch('showList')

    }
}
</script>

<style>
  
</style>