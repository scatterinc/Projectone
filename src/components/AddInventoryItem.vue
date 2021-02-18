<template>
  <b-modal id="modal-center" size="lg" centered title="Add Inventory Item">
    <p class="md-1"><b>Item Name</b>
      <b-input />
</p>

<div >
  <b-tabs content-class="mt-3" align="left">
    <b-tab title="Basic Info" active><p>

       <b-container fluid >
    <b-row class="my-1" v-for="(field, label) in fields" :key="label">
      <b-col sm="3">
        <label :for="`type-${field.type}`">{{ label }}:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${filed.type}`" v-model="field.model" :type="field.type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>

      </p></b-tab>
    <b-tab title="More Info"><p>
                Measure <b-input/>
          Reorder Point <b-input/>
          Vendor<b-btn variant="transparent"><feather-icon size="1x" icon="PlusCircleIcon"/></b-btn> <b-input/><b-col></b-col>
          Manufacturer<b-input/>
          Picture <b-input/>

      </p></b-tab>
    <b-tab title="Second"><p>
        <b-row bordertop="black">
        <!---Leftside-->
        <b-col align="right">
         Type  <p/><p/><p/>
         Department  <p/>
          Item Description <p/>
            Size  <b-input/>
          Price  <b-input/>
          Cost  <b-input/>
          Tax  <b-input/>
          UPC  <b-input/>
        </b-col>
        <!---Rightside-->
        <b-col>
<b-input/><p/>
<b-input/><p/>
<b-input/><p/>
        </b-col>
      </b-row>

      </p></b-tab>
    <b-tab title="Second"><p>Picture</p></b-tab>
    <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
  </b-tabs>
</div>

  </b-modal>
</template>

<script>
export default {
  name: 'AddInventoryItem.vue',
  data: () => ({
    fields: {
      Type: { type: 'text', model: '' },
      Department: { type: 'text', model: '' },
      Item_Description: { type: 'text', model: '' },
      Size: { type: 'text', model: '' },
      Attributes: { type: 'number', model: '' },
      Tax: { type: 'text', model: '' },
      UPC: { type: 'text', model: '' }
    }
  })
};
</script>

<style scoped>

</style>
