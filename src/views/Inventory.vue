<template>
  <div class="inventory">
    <b-container class="Inventory Header" :fluid="true">
      <b-row>
        <b-col><h1>Inventory</h1></b-col>
        <b-col class="d-flex justify-content-center">
          <div>
            <b-button class="mr-1" variant="secondary">
              <feather-icon size="1x" icon="ListIcon"/>
              Detail
            </b-button>
            <b-button class="mr-1" variant="secondary">
              <feather-icon size="1x" icon="PlusCircleIcon"/>
              Add
            </b-button>
            <b-button variant="secondary">
              <feather-icon size="1x" icon="Edit3Icon"/>
              Edit
            </b-button>
          </div>
        </b-col>
        <b-col class="d-flex justify-content-end">
          <div>
            <b-dropdown variant="transparent" text="Customer">
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="PlusSquareIcon"/>
                Add Recipe
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ListIcon"/>
                Detail
              </b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="Share2Icon"/>
              </template>
            </b-dropdown>
            <b-dropdown variant="transparent">
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="TruckIcon"/>
                Receiving
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="FileTextIcon"/>
                Purchase Order
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="InboxIcon"/>
                On-Hold
                <b-badge variant="info" pill>2</b-badge>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <a></a>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ClipboardIcon"/>
                Logs
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ClipboardIcon"/>
                Physical Count
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ActivityIcon"/>
                History
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="ToolIcon"/>
                Settings
              </b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="CropIcon"/>
              </template>
            </b-dropdown>
            <b-dropdown variant="transparent">
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="SettingsIcon"/>
                Settings
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="BellIcon"/>
                Notification
                <b-badge variant="info" pill>14</b-badge>
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="MessageSquareIcon"/>
                Message
                <b-badge variant="info" pill>6</b-badge>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="LogOutIcon"/>
                Logout
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">
                <feather-icon size="1x" icon="LockIcon"/>
                Lock
              </b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="UserIcon"/>
                John Doe
              </template>
            </b-dropdown>
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
    <div class="row">
      <div class="col px-md-5 text-center">
        <div class="p-3 border bg-light">
          <b>Total Items 100</b>
        </div>
      </div>
      <div class="col px-md-5 text-center">
        <div class="p-3 border bg-light">
          <b>Total Cost $10,000</b>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import inventory from '@/assets/data/inventory.json';
import search from '../store/search';
import { zipObject } from 'lodash';
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'Inventory',
  components: { FeatherIcon },
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

.table-container {
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  height: 400px;

  .ps {
    height: 400px;
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
</style>
