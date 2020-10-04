<template>
  <div class="inventory">
     <b-container class="Inventory Header">
      <b-row>
        <b-col><h1>Inventory</h1></b-col>
        <b-col class="text-right">
          <div>
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
        <div class="position-relative">
      <div class="table-header-borders"></div>
    </div>
    <div class="table-container">
      <perfect-scrollbar>
        <b-table :items="filteredData" :fields="inventory.cols" :small="true"></b-table>
      </perfect-scrollbar>
    </div>
      <div class="row mx-md-n5">
  <div class="col px-md-5 text-center"><div class="p-3 border bg-light"><b>Total Items 100</b></div></div>
  <div class="col px-md-5 text-center"><div class="p-3 border bg-light"><b>Total Cost $10,000</b></div></div>
  </div>
    </div>
</template>
<script>
import inventory from '@/assets/data/inventory.json';
import search from '../store/search';
import { zipObject } from 'lodash';
import FeatherIcon from '@/components/FeatherIcon';
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';
import invDnaDropdown from '@/util/invDnaDropdown';
import invRecDropdown from '@/util/invRecDropdown';

export default {
  name: 'Inventory',
  components: { FeatherIcon, DropdownBarItem },
  data: () => ({
    inventory,
    dropdownBar: [
    ].concat(invRecDropdown, invDnaDropdown, userDropdown)
  }),
  computed: {
    term () {
      return search.term;
    },
    filteredData () {
      return this.rows.filter(i => {
        return (i['Item Name'].toLowerCase().indexOf(this.term) > -1) ||
          (i.Manufacturer.toLowerCase().indexOf(this.term) > -1);
      });
    },
    rows () {
      return inventory.data.map(item => zipObject(inventory.cols, item));
    }
  },
  mounted () {
    console.log(this.rows);
  },
  beforeDestroy () {
    search.term = '';
  },
  methods: {
    addToCart (row) {
      console.log(row);
    }
  }
};
</script>
<style lang="scss">
.table-header-borders {
  position: absolute;
  height: 58px;
  border: solid #ecf0f1;
  border-width: 1px 0;
  z-index: 1;
  pointer-events: none;
  width: 100%;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .1), 0 0 1px 0 rgba(0, 0, 0, .07), 0 1px 1px -1px rgba(0, 0, 0, .06);
}
.ps__rail-y {
  z-index: 1;
}
.inventory {
  height:calc(100vh - 190px);
  .table-container {
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    height: 100%;
    .ps {
      height: 100%;
    }
    th {
      position: sticky;
      top: 0;
      background-color: #ecf0f1;
    }

    &:before {
      content: '';
      position: absolute;
      top: 60px;
      width: 100%;
      left: 0;
    }
  }
}

</style>
