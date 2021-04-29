<template>
    <div>
    <b-modal id="NewReconciliation" centered title ="New Bank Reconciliation" header-text-variant="red">
    <p class="my-1">
        <b-row class='mb-1'>
    <b-col class='text-right md-2' cols="4"> Bank Account </b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
     <b-row class='mb-4'>
    <b-col class='text-right' style="font-size: 0.8rem; color:red" cols="6"> <i><b>last reconciled: </b></i> </b-col>
    <b-col class='text-left' style="font-size: 0.8rem;" cols="4"><b> <!---January 10, 2020 --></b> </b-col>
      </b-row>
    <b-row class='mb-2'>
    <b-col class='text-right' cols="4"> Begining Balance </b-col>
    <b-col cols="6"><b-input placeholder="$0.00" class="text-right"/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="4"> Ending Balance</b-col>
    <b-col cols="6"><b-input placeholder="$0.00" class="text-right"/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' style="font-size: 0.82rem;" cols="4">Statement Ending Date</b-col>
    <b-col cols="5"><b-input type="date"/></b-col>
  </b-row>

    </p>
  </b-modal>
</div>
</template>
<script>
export default {
  name: 'NewReconciliation.vue'
};
</script>

<style scoped>

</style>
