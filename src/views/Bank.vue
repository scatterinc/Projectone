<template>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Banking</h1>
          <div class="text-right">
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
            </b-button-group>
            <!----Drop Down Top------>
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
import FeatherIcon from '@/components/FeatherIcon';
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import bankChqDropdown from '@/util/bankChqDropdown';
import bankDepDropdown from '@/util/bankDepDropdown';
import bankCcDropdown from '@/util/bankCcDropdown';
import bankLoanDropdown from '@/util/bankLoanDropdown';
import bankSecDropdown from '@/util/bankSecDropdown';
import bankDnaDropdown from '@/util/bankDnaDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { FeatherIcon, DropdownBarItem },
  data: () => ({
    dropdownBar: [
    ].concat(bankChqDropdown, bankDepDropdown, bankCcDropdown, bankLoanDropdown, bankSecDropdown, bankDnaDropdown, userDropdown)
  })
};
</script>
<style>
.tooltip {
  opacity: .9;
}
</style>
