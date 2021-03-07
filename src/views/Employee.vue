<template>
  <div class="employee">
     <b-container   class="Employee Header">
      <b-row variant="bottom-border">
        <b-col><h1>Employee</h1></b-col>
        <b-col>
          <div class="text-right">
          <b-button class="mr-1" variant="secondary"><feather-icon size="1x" icon="ListIcon" /> Detail</b-button>
          <b-button class="mr-1" variant="secondary"><feather-icon size="1x" icon="PlusCircleIcon" /> Add</b-button>
          <b-button variant="secondary"><feather-icon size="1x" icon="Edit3Icon" /> Edit</b-button>
          </div>
        </b-col>
        <b-col class="text-right">
           <div>

                             <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
          </div>
        </b-col>
          </b-row>
        </b-container>
        <p class="border-top"></p>
        </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import FeatherIcon from '@/components/FeatherIcon';
import empDnaDropdown from '@/util/empDnaDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem, FeatherIcon },
  data: () => ({
    dropdownBar: [].concat(empDnaDropdown, userDropdown)
  })
};
</script>
