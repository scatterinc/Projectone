<template>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Accounting</h1>
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
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import receivableDropdown from '@/util/accRecDropdown';
import payablesDropdown from '@/util/accPayDropdown';
import accDropdown from '@/util/accDropdown';
import finDropdown from '@/util/accFinDropdown';
import accDnaDropdown from '@/util/accDnaDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: [{
      name: 'Ledger',
      icon: 'SidebarIcon',
      expanded: true,
      items: [
        { name: 'Journal Entry', icon: 'FileTextIcon' },
        { name: 'Budget Entry', icon: 'FileTextIcon' },
        null,
        { name: 'Journal Template', icon: 'FileTextIcon' },
        null,
        { name: 'Trial Balance', icon: 'FileTextIcon' }
      ]
    }].concat(receivableDropdown, payablesDropdown, accDropdown, finDropdown, accDnaDropdown, userDropdown)
  })
};
</script>
