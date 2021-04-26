<template>
<div>
  <b-container :fluid="true" class="payroll">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Payroll</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Run</b-button>
              <b-button class="mr-2" variant="outline-secondary">Print</b-button>
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

  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import hrmsDropdown from '@/util/premium/hrmsDropdown';
import payTaxesDropdown from '@/util/premium/payTaxesDropdown';
import timeCostPayrollDropdown from '@/util/premium/timeCostPayrollDropdown';
import payrollUtilityDropdown from '@/util/premium/payrollUtilityDropdown';
import payrollDnaDropdown from '@/util/premium/payrollDnaDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: [].concat(hrmsDropdown, payTaxesDropdown, timeCostPayrollDropdown, payrollUtilityDropdown, payrollDnaDropdown, userDropdown)
  })
};
</script>
