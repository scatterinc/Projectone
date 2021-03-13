<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Item History</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
            </b-button-group>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <p class="border-top"></p>

                      <b-table striped hover :items="filteredData" :fields="fields" :small="true"
                    class="Mx-4"
                    >

        </b-table>
  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';
import calendarPickerDropdown from '@/util/calendarPickerDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    fields: [
      'Transaction #', 'Date', 'item #', 'Item Name', 'Activity', 'Reference # ', 'Quantity', 'amount', 'ExtAmount', 'Customer', 'User'
    ],
    dropdownBar: [].concat(calendarPickerDropdown, userDropdown)
  })
};
</script>
