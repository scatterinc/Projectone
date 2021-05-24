<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Chart of Accounts</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
                         </b-button-group>
                           <b-button variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" /> New</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" /> Save</b-button>
                           <b-button class='mr-4' variant="transparent"><feather-icon size="1x" icon="DeleteIcon" /> Delete</b-button>
                            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>

        </div>
      </b-col>
    </b-row>
  </b-container>
  <div class="border-top mb-2"></div>
<b-row class="mb-1">
    <b-col class="text-left" offset-md="1" style="font-size: 0.9rem;"><b>
         Ledger Code:
    </b></b-col>
     <b-col cols="1" class="text-left" style="font-size: 0.9rem;">
                 <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
     <b-col cols="2" class="text-left" style="font-size: 0.9rem;">
                 <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
           </b-col>
    <b-col class="text-left">
      <b-btn variant="transparent" style="font-size: 0.8rem; color:black"><feather-icon size="1x" icon="EditIcon"/></b-btn>
   </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
             </b-col>
    <b-col class="text-left">
            </b-col>
</b-row>
<b-row class="mb-1">
    <b-col class="text-left" offset-md="1" style="font-size: 0.9rem;" cols="2"><b>
         Retained Earnings Account:
    </b></b-col>
     <b-col class="text-left" style="font-size: 0.9rem;">
                 <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
    </b-col>
     <b-col class="text-left" style="font-size: 0.8rem;">
          </b-col>
    <b-col>
   </b-col>
    <b-col>
     </b-col>
    <b-col class="text-right" style="font-size: 0.9rem;">
            </b-col>
    <b-col class="text-left">
           </b-col>
</b-row>
<b-row class= 'mt-3'>
  <b-col class='text-right'>
<b-form-checkbox v-model="checked"  name="Customercheck-button"  switch>
  </b-form-checkbox>
</b-col>
</b-row>
<!-----------Table----------->
    <b-table striped hover :items="filteredData" :fields="fields" :small="true" class="Mx-4">
        </b-table>
  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    fields: [
      { label: '#' }, 'Account Number', 'Account Name', 'Account Type', 'DP Restrictions', 'Basis Contronl Type', 'Date of last change', 'Modify by'
    ],
    checked: true,
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Make Inactive', icon: 'FileMinusIcon' },
        null,
        { name: 'Document Centre', icon: 'ArchiveIcon' },
        null,
        { name: 'Ledger Codes', icon: 'UploadIcon' }
      ]
    }].concat(userDropdown)
  }),
  checked: true
};
</script>
