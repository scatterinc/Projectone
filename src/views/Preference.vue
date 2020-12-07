<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Preference</h1>
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
  </div>
</template>
<script>
import FeatherIcon from '@/components/FeatherIcon';
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import preComDropdown from '@/util/preComDropdown';
import preSecDropdown from '@/util/preSecDropdown';
import preUseDropdown from '@/util/preUseDropdown';
import preHarDropdown from '@/util/preHarDropdown';
import preAleDropdown from '@/util/preAleDropdown';
import preDnaDropdown from '@/util/preDnaDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { FeatherIcon, DropdownBarItem },
  data: () => ({
    dropdownBar: [
    ].concat(preComDropdown, preSecDropdown, preUseDropdown, preHarDropdown, preAleDropdown, preDnaDropdown, userDropdown)
  })
};
</script>
<style>
.tooltip {
  opacity: .9;
}
</style>
