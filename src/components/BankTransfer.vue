<template>
    <b-modal id="Transfer" centered title="Transfer">
    <p class="my-2">
      <b-row bordertop="black">
        <!---Leftside-->
        <b-col class="text-center">
          <p>Date</p>
          <p/>
          <p>TRANSFER FUNDS FROM</p>
          <p/>
          <p>TRANSFER FUNDS TO</p>
          <p/>
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

    </p>
  </b-modal>
</template>

<script>
export default {
  name: 'BankTransfer.vue'
};
</script>
<style scoped>

</style>
