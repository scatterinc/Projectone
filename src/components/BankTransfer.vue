<template>
    <div>
    <b-modal id="Transfer" centered title ="Transfer" header-text-variant="red">
           <b-row class='mb-4'>
    <b-col class='text-right md-2' cols="4"> Date </b-col>
    <b-col cols="5"><b-input type="date"/></b-col>
     </b-row>
    <b-row class='mb-0.25 mt-2'>
    <b-col class='text-right' cols="4"> TRANSFER FUNDS FROM </b-col>
    <b-col cols="6"><b-input placeholder="" class="text-right"/></b-col>
  </b-row>
       <b-row class='mb-4'>
    <b-col class='text-right' style="font-size: 0.8rem; color:red" cols="7"> <i><b>Account balance: </b></i> </b-col>
    <b-col class='text-left' style="font-size: 0.8rem;" cols="4"><b> <!---January 10, 2020 -->$100,000,000.00</b> </b-col>
      </b-row>
      <b-row class='mb-0.25'>
    <b-col class='text-right' cols="4"> TRANSFER FUNDS TO</b-col>
    <b-col cols="6"><b-input placeholder="" class="text-right"/></b-col>
  </b-row>
  <b-row class='mb-4'>
    <b-col class='text-right' style="font-size: 0.8rem; color:green" cols="7"> <i><b>Account balance: </b></i> </b-col>
    <b-col class='text-left' style="font-size: 0.8rem;" cols="4"><b> <!---January 10, 2020 -->$100,000,000.00</b> </b-col>
      </b-row>
        <b-row class='mb-0.25'>
    <b-col class='text-right' cols="4"> AMOUNT</b-col>
    <b-col cols="6"><b-input placeholder="$0.00" class="text-right"/></b-col>
  </b-row>
  <b-row class='mb-1'>
    <b-col class='text-left' style="font-size: 0.8rem;"> <i><b><b-btn v-b-toggle.banktransfermemo variant="transparent" style="font-size: 0.8rem; color:black"><feather-icon size="1x" icon="Edit3Icon"/></b-btn></b></i>
        <b-collapse id="banktransfermemo" class="mt-2">
          <b-row>
             <b-col cols='10'>
                <b-form-textarea
                     id="textarea"
      v-model="text"
      col="4"
      placeholder="Memo"
      rows="2"
      max-rows="2"
    ></b-form-textarea>
             </b-col>
             <b-col>
               <b-btn variant="transparent">
               <feather-icon size="1x" icon="PaperclipIcon"/></b-btn>
             </b-col>
          </b-row>
      </b-collapse>
    </b-col>
          </b-row>

  </b-modal>
</div>
</template>
<script>
export default {
  name: 'BankTransfer',
  data: () => ({
    text: ''
  })
};
</script>
<style scoped>

</style>
