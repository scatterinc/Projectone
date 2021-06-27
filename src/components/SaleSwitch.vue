<template>
<b-modal id="SaleSwitch" size="sm" centered title="View Preference">
  <b-row>
    <b-col class="text-center">
     <b-btn @click="$router.push('/salesgrid')" variant="transaprent"> <font-awesome-icon size="3x" :icon="['fas', 'th']" /></b-btn>
     <div>Grid View</div>
    </b-col>
     <b-col class="text-center">
      <b-btn @click="$router.push('/sales')" variant="transaprent"> <font-awesome-icon size="3x" :icon="['fas', 'list']" /></b-btn>
    <div>list View</div>
    </b-col>
  </b-row>

 </b-modal>
</template>

<script>

export default {
  name: 'SaleSwitch'
};
</script>
<style scoped>

</style>
