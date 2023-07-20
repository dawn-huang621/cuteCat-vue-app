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
          <tr class="border-t">
            <td class="pt-2 pb-2">老大</td>
            <td>{{ $store.state.numberOfCats }}</td>
            <td>15</td>
            <td>15</td>
          </tr>
          <tr class="border-t py-4">
            <td class="pt-2 pb-2">老大</td>
            <td>1</td>
            <td>15</td>
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

export default {
    name: 'CountPrice',
}
</script>

<style>
</style>