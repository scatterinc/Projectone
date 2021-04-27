<template>
    <b-modal id="Transfer" centered title="Transfer">
      <b-container :fluid="true" class="my-2">
        <b-row bordertop="black">
          <b-col class="text-center">
            <p>Date</p>
            <p>TRANSFER FUNDS FROM</p>
            <p>TRANSFER FUNDS TO</p>
            <p>Amount</p>
          </b-col>
          <!---Rightside-->
          <b-col>
            <p><b-input/></p>
            <p><b-input/></p>
            <p><b-input/></p>
            <p><b-input class="text-right" placeholder="0.00"/></p>
          </b-col>
        </b-row>
      </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'BankTransfer.vue'
};
</script>
<style scoped>

</style>
