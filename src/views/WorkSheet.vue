<template>
<div>
  <b-container :fluid="true" class="worksheet">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Work Sheets</h1>
          <div>
            <b-button-group class="mr-3">
              <b-button variant="outline-secondary"><feather-icon size="1x" icon="UploadIcon" /> Upload</b-button>
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
import wsLeadDropdown from '@/util/premium/wsLeadDropdown';
import wsWorkingPaperDropdown from '@/util/premium/wsWorkingPaperDropdown';
import wsAnalysisDropdown from '@/util/premium/wsAnalysisDropdown';
import wsStatementDropdown from '@/util/premium/wsStatementDropdown';
import wsUtilityDropdown from '@/util/premium/wsUtilityDropdown';
import worksheetDnaDropdown from '@/util/premium/worksheetDnaDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: [].concat(wsLeadDropdown, wsWorkingPaperDropdown, wsAnalysisDropdown, wsStatementDropdown, wsUtilityDropdown, worksheetDnaDropdown, userDropdown)
  })
};
</script>
