<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Recipe</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
                         </b-button-group>
                           <b-button v-b-modal.modal-center variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" />New</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" />Save</b-button>
                           <b-button variant="transparent" class='mr-4'><feather-icon size="1x" icon="DeleteIcon" />Delete</b-button>

                       <add-recipe foo="bar"/>
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
import userDropdown from '@/util/userDropdown';
import AddRecipe from '../components/AddRecipe';

export default {
  components: { DropdownBarItem, AddRecipe },
  data: () => ({
    dropdownBar: [].concat(userDropdown)
  })
};
</script>
