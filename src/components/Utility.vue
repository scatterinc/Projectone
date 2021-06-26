<template>
<b-modal id="Utility" size="sm" centered title="Database">
  <b-row>
    <b-col class="text-center">
     <b-btn @click="$router.push('/salesgrid')" variant="transaprent"> <font-awesome-icon style="color:green" size="3x" :icon="['fas', 'database']" /></b-btn>
     <div>Connected: <a style="color:green">Google</a></div>
    </b-col>
    </b-row>

 </b-modal>
</template>

<script>

export default {
  name: 'Utility'
};
</script>
<style scoped>

</style>
