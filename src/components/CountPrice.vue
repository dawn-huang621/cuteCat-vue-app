<template>
  
  <div class="flex m-4 text-left">
        <table class="table-auto w-full ">
        <thead>
          <tr>
            <th class="w-48">項目</th>
            <th class="w-48">數量</th>
            <th class="w-48">單價</th>
            <th class="w-48">小計</th>
          </tr>
        </thead>
        <tbody>
          
          <tr class="border-t" v-for="cat in catCart">
            <td class="pt-2 pb-2">{{cat.name}}</td>
            <td >{{ cat.amount }}</td>
            <td >{{ cat.price }}</td>
            <td >{{ cat.subTotal }}</td>
          </tr>
        </tbody>
        <tbody>
          <tr class="border-t">
            <td></td>
            <td></td>
            <td class="pt-2 pb-2">總計</td>
            <td>${{totalCount}}</td>
          </tr>
        </tbody>
        </table>
      </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
    name: 'CountPrice',
    computed: {
    ...mapState(['catCart']),
    ...mapGetters(['totalCount']), // 使用 mapState 将 "catCart" 映射到组件的计算属性中
  },
}

</script>

<style>
</style>