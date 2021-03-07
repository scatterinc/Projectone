<template>
<div>
  <b-container :fluid="true" class="home">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Dashboard</h1>
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

  <div class="home">
    <pre v-html="items" v-if="items.length" />
    <div v-else>loading...</div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import calendarPickerDropdown from '@/util/calendarPickerDropdown';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  name: 'Home',
  data: () => ({
    dropdownBar: [].concat(calendarPickerDropdown, userDropdown), /** why is this not working, but works in other */
    items: []
  }),
  mounted () {
    setTimeout(() => {
      this.$http.get('https://jsonplaceholder.typicode.com/todos').then(r => { this.items = r.data; });
    }, 5000);
  }
};
</script>
