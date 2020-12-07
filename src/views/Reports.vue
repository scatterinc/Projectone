<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Report</h1>
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
    <div>
    <font-awesome-icon :icon="myIcon" />
  </div>
  </b-container>
  <p class="border-top"></p>
  </div>
</template>
<script>
import FeatherIcon from '@/components/FeatherIcon';
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import repAccDropdown from '@/util/repAccDropdown';
import repSalDropdown from '@/util/repSalDropdown';
import repInvDropdown from '@/util/repInvDropdown';
import repEmpDropdown from '@/util/repEmpDropdown';
import repCusDropdown from '@/util/repCusDropdown';
import repDnaDropdown from '@/util/repDnaDropdown';
import userDropdown from '@/util/userDropdown';
import fontawesome from '@/components/fontawesome';

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { FeatherIcon, DropdownBarItem, fontawesome },
  data: () => ({
    dropdownBar: [
    ].concat(repAccDropdown, repSalDropdown, repInvDropdown, repEmpDropdown, repCusDropdown, repDnaDropdown, userDropdown),
    fontawesome: [
    ].concat(fontawesome)
  })
};
</script>
<style>
.tooltip {
  opacity: .9;
}
</style>
