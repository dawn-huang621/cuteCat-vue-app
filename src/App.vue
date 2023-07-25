<script>
import CatHeader from './components/CatHeader.vue'
import CatBody from './components/CatBody.vue'
import CountPrice from './components/CountPrice.vue'

export default {
  name: 'App',
  components: { CatHeader, CatBody, CountPrice },
  mounted() {
    // console.log('App', this);
  },
  methods: {
    clearCats(){
      this.$store.commit('CLEARTOCART')
    }
  }
}


</script>

<template>
  <div>
    
    <main>
      <CatHeader></CatHeader>
      <CatBody></CatBody>
      <CountPrice></CountPrice>

      <button @click="clearCats" class="rounded-lg bg-black dark:bg-gray-900 text-white p-4 mt-5 mb-5 ml-4">清空購物車</button>
    </main>

    <!-- modal -->
    <div
      v-show="false"
      class="fixed bg-opacity-75 bg-slate-900 w-full h-full top-0 left-0">
      <div class="relative bg-white w-2/3 h-[75vh] border-2 mx-auto top-[12vh] overflow-y-scroll p-4">
        <h2 class="text-center mb-4">老大</h2>

        <div class="flex justify-center w-full h-60 bg-no-repeat bg-top bg-contain"
          style="background-image: url('images/cat001.jpg')">
        </div>

        <ul class="my-4 px-4">
          <li 
            class="block py-4 border-bottom text-xl leading-8">
            <div><i class="fas fa-user"></i> <span class="ml-4">user123</span></div>
            <div><i class="fas fa-star"></i> <span class="ml-4">5</span></div>
            <div>
              <i class="fas fa-comments"></i>
              <div class="-mt-7 pl-10">這隻貓咪很可愛，而且很聽話，非常容易照顧。</div>
            </div>
          </li>
        </ul>
      </div>
    </div>


  </div>
  
</template>

<style scoped>
</style>
