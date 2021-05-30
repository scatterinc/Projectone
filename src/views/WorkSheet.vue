<template>
<div>
  <b-container :fluid="true" class="worksheet">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Work Sheets <b-button v-b-toggle.sidebar-right variant="transparent"><feather-icon size="1x" icon="LayersIcon" /></b-button></h1>
                                <div>
            <b-button-group class="mr-3">
              <b-button v-b-modal.WsUpload variant="outline-secondary"><feather-icon size="1x" icon="UploadIcon" /> Upload</b-button>
               <b-button variant="outline-secondary"><feather-icon size="1x" icon="PaperclipIcon" /> Attach</b-button>
                   </b-button-group>
                   <ws-upload foo="bar"/>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
    <!-----------------This is just a test to remove--->
    <b-sidebar id="sidebar-right" title="Document Manager" right :shadow="true">
      <div class="px-3 py-2">
        <div class="text-right">
                  <b-button variant="light" @click="$router.push('/worksheet')"><b-icon icon="back"></b-icon></b-button>
        </div>
        <p>
        <b-tree-view  style="color:red" :data="treeData"></b-tree-view>
        </p>
             </div>
    </b-sidebar>
       <div class="border-top mb-2"></div>
  <router-view><div>Test</div></router-view>
   </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import wsWorkingPaperDropdown from '@/util/premium/wsWorkingPaperDropdown';
import wsAnalysisDropdown from '@/util/premium/wsAnalysisDropdown';
import wsStatementDropdown from '@/util/premium/wsStatementDropdown';
import wsUtilityDropdown from '@/util/premium/wsUtilityDropdown';
import worksheetDnaDropdown from '@/util/premium/worksheetDnaDropdown';
import userDropdown from '@/util/userDropdown';
import WsUpload from '../components/WsUpload';

export default {
  components: { DropdownBarItem, WsUpload },
  data: () => ({
    dropdownBar: [].concat(wsWorkingPaperDropdown, wsAnalysisDropdown, wsStatementDropdown, wsUtilityDropdown, worksheetDnaDropdown, userDropdown),
    treeData: [{
      id: 2,
      name: 'Entity name',
      children: [{
        id: 3,
        name: 'Working Paper Index'
      },
      {
        id: 4,
        name: 'Financial Reports'
      },
      {
        id: 5,
        name: 'Completion Documents'
      },
      {
        id: 6,
        name: 'General Work',
        Children: [{

          id: 7,
          name: 'Working Trial Balance '
        },
        {
          id: 8,
          name: 'General Documentation',
          children: [{
            id: 20,
            name: 'Financial Statement Areas',
            Children: [{

              id: 10,
              name: 'Assets '
            },
            {
              id: 11,
              name: 'Liabilities '
            },
            {
              id: 12,
              name: 'Equity'
            }]
          }]
        }]
      }]
    }]
  })
};
</script>
