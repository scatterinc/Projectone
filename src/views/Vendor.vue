<template>
  <div class="vendor">
     <b-container   class="Vendor Header">
      <b-row variant="bottom-border">
        <b-col><h1>Vendor</h1></b-col>
        <b-col>
          <div class="text-right">
          <b-button class="mr-1" variant="secondary"><feather-icon size="1x" icon="ListIcon" /> Detail</b-button>
          <b-button v-b-modal.modal-center class="mr-1" variant="secondary"><feather-icon size="1x" icon="PlusCircleIcon" /> Add</b-button>
          <b-button variant="secondary"><feather-icon size="1x" icon="Edit3Icon" /> Edit</b-button>

            <add-vendor foo="bar"/>

          </div>
        </b-col>
        <b-col class="text-right">
           <div>

                                    <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
          </div>
        </b-col>
          </b-row>
        </b-container>
        <p class="border-top"></p>
          <b-row>
    <b-col cols="2" style="color:red"><h6><i>Number of Vendor(s)</i></h6></b-col>
    <b-col cols="6" class=" mx-2 text-left"><b>0</b></b-col>
  </b-row>
                        <b-table striped hover :items="filteredData" :fields="fields" :small="true"
                    class="Mx-4"
                    >

        </b-table>
        </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import FeatherIcon from '@/components/FeatherIcon';
import venDnaDropdown from '@/util/venDnaDropdown';
import userDropdown from '@/util/userDropdown';
import AddVendor from '../components/AddVendor';

export default {
  components: { DropdownBarItem, FeatherIcon, AddVendor },
  data: () => ({
    fields: [
      'Vender #', 'First Name', 'Last Name', 'Adress ', 'Phone No.', 'Email', 'Picture'
    ],
    dropdownBar: [].concat(venDnaDropdown, userDropdown)
  })
};
</script>
