<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Premium</h1>
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
 <b-button size="mh:100" variant="secondary" class="mh:100 w:120px">
             </b-button>
             <b-button variant="secondary"><feather-icon size="3x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
             <a/>
             <b-button variant="secondary mx-5 button3"><feather-icon size="2x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
                          <b-button variant="secondary"><feather-icon size="5x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Test', icon: 'FileTextIcon' },
        { name: 'Test1', icon: 'FileTextIcon' },
        null,
        { name: 'Test2', icon: 'FileTextIcon' },
        null,
        { name: 'Test3', icon: 'FileTextIcon' }
      ]
    }].concat(userDropdown)
  })
};
</script>
