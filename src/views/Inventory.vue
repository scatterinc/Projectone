<template>
  <div class="inventory">
    <h1>Inventory</h1>
    <div class="position-relative">
      <div class="table-header-borders"></div>
    </div>
    <div class="table-container">
      <perfect-scrollbar>
        <b-table :items="filteredData" :fields="inventory.cols" :small="true"></b-table>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import inventory from '@/assets/data/inventory.json';
import search from '../store/search';
import { zipObject } from 'lodash';
export default {
  name: 'Inventory',
  data: () => ({
    inventory
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
  }
};
</script>
<style lang="scss">
.table-header-borders {
  position: absolute;
  height: 34px;
  border: solid #eee;
  border-width: 1px 0;
  z-index: 1;
  pointer-events: none;
  width: calc(100% - 7px);
  box-shadow: 0 0 3px 0 rgba(0,0,0,.1), 0 0 1px 0 rgba(0,0,0,.07), 0 1px 1px -1px rgba(0,0,0,.06);
}
.table-container {
  overflow-y: auto;
  overflow-x:hidden;
  position: relative;
  height: 400px;
  .ps {
    height: 400px;
  }
  th {
    position: sticky;
    top: 0;
    background-color: white;
  }
  &:before{
    content: '';
    position: absolute;
    top: 60px;
    width: 100%;
    left: 0;
  }
}
</style>
