<template>
  <b-modal id="modal-center" centered title="Add Item">
    <p class="my-1">Item Name
      <b-input />
      <b-row bordertop="black">
        <!---Leftside-->
        <b-col>
          Department  <b-input/>
          Item Description  <b-input/>
          Price  <b-input/>
          Cost  <b-input/>
          Tax  <b-input/>
          UPC  <b-input/>
        </b-col>
        <!---Rightside-->
        <b-col>
          Measure <b-input/>
          Reorder Point <b-input/>
          Vendor<b-btn variant="transparent"><feather-icon size="1x" icon="PlusCircleIcon"/></b-btn> <b-input/><b-col></b-col>
          Manufacturer<b-input/>
          Picture <b-input/>
        </b-col>
      </b-row>

    </p>
  </b-modal>
</template>

<script>
export default {
  name: 'AddInventoryItem.vue'
};
</script>

<style scoped>

</style>
