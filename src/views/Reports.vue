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
                                 :key="key"/>
            </div>
          </div>
        </b-col>
      </b-row>
        </b-container>
    <p class="border-top"></p>
      <b-row>
        <font-awesome-icon icon="user" />
      </b-row>
  </div>
</template>
<script>
import repAccDropdown from '@/util/repAccDropdown';
import repSalDropdown from '@/util/repSalDropdown';
import repEmpDropdown from '@/util/repEmpDropdown';
import repInvDropdown from '@/util/repInvDropdown';
import repCusDropdown from '@/util/repCusDropdown';
import repDnaDropdown from '@/util/repDnaDropdown';
import userDropdown from '@/util/userDropdown';
import DropdownBarItem from '@/components/DropdownBarItem.vue';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: []
      .concat(repAccDropdown, repSalDropdown, repInvDropdown, repEmpDropdown, repCusDropdown, repDnaDropdown, userDropdown)
  })
};
</script>
<style>
.tooltip {
  opacity: .9;
}
</style>
