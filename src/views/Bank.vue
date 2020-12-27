<template>
<div>
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
  <p class="border-top"></p>
  <!----Test--->
<b-modal id="Transfer" centered title="Transfer">
  <b-container fluid>
    <b-row class="my-1" v-for="(field, label) in fields" :key="label">
      <b-col sm="3">
        <label :for="`type-${field.type}`"> {{ label }}:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${field.type}`" v-model="field.model" :type="field.type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</b-modal>
  </div>
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
import BankTransfer from '@/components/BankTransfer';

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { FeatherIcon, DropdownBarItem, BankTransfer },
  data: () => ({
    dropdownBar: [
    ].concat(bankChqDropdown, bankDepDropdown, bankCcDropdown, bankLoanDropdown, bankSecDropdown, bankDnaDropdown, userDropdown),
    fields: {
      test: { type: 'text', model: '' },
      test2: { type: 'number', model: '' },
      test3: { type: 'email', model: '' },
      test4: { type: 'password', model: '' },
      test5: { type: 'search', model: '' },
      test6: { type: 'url', model: '' },
      test7: { type: 'tel', model: '' },
      test8: { type: 'date', model: '' },
      test9: { type: 'time', model: '' },
      test10: { type: 'range', model: '' },
      test11: { type: 'color', model: '' }
    }
  })
};
</script>
<style>
.tooltip {
  opacity: .9;
}
</style>
