<template>
  
  <div class="flex m-4 text-left">
        <table class="table-auto w-full">
        <thead>
          <tr>
            <th>項目</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          
          <tr class="border-t" v-for="cat in catAll">
            <td class="pt-2 pb-2">{{cat.name}}</td>
            <td>{{ cat.amount }}</td>
            <td>{{ cat.price }}</td>
            <td>15</td>
          </tr>
        </tbody>
        <tbody>
          <tr class="border-t">
            <td></td>
            <td></td>
            <td class="pt-2 pb-2">總計</td>
            <td>$0</td>
          </tr>
        </tbody>
        </table>
      </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'CountPrice',
    computed: {
    ...mapState(['catAll']), // 使用 mapState 将 "catAll" 映射到组件的计算属性中
  },
}

</script>

<style>
</style>