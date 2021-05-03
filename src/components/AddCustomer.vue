<template>
  <b-modal id="modal-center" size="lg" centered title="Add Customer">
    <p class="md-1"><b>Customer Name</b>
      <b-input />
</p>

<!-----first tab--->
<div >
  <b-tabs content-class="mt-3" align="left">
    <b-tab title="Basic Info" active>

    <b-row class='mb-2'>
    <b-col class='text-right md-2' cols="3"> First Name  </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
    <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Last Name </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Phone Number </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
      <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Email Address </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>

  <a class="border-top"></a>
          <b-row class='mb-1'>
    <b-col class='text-right' cols="4" style="color:red"> Status</b-col>
    <b-col cols="3"><b-form-checkbox v-model="checked" name="AddCustcheck-button" switch>
         Active
    </b-form-checkbox>
    </b-col>
  </b-row>
      </b-tab>
      <!-----Second tab--->
    <b-tab title="Address">
         <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Street 1 </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Street 2 </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
        <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> City </b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
          <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> State</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
     <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Country</b-col>
    <b-col cols="6"><b-input/></b-col>
  </b-row>
       <b-row class='mb-2'>
    <b-col class='text-right' cols="3"> Postal Code</b-col>
    <b-col cols="4"><b-input/></b-col>
  </b-row>

  </b-tab>
<!-----Third tab--->
   <b-tab title="Notes">
            <b-row class='mb-4'>
    <b-col class='text-right' cols="3"> Notes</b-col>
    <b-col cols="8">
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="10"
      max-rows="10"
    ></b-form-textarea>

    </b-col>
 </b-row>
   </b-tab>

<!----- Fourth tab--->
  <b-tab title="Rewards" disabled>

    </b-tab>

    </b-tabs>
</div>

  </b-modal>
</template>

<script>
export default {
  name: 'AddCustomer.vue',
  data: () => ({
    checked: true
  })
  /**  data () {
    return {

      checked: true :'Active'
      else 'inactive'
    };
  }
*/
};
</script>

<style scoped>

</style>
