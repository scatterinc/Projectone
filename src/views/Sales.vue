<template>
  <div class="sales">
    <b-container class="Sales Header">
      <b-row>
        <b-col><h1>Sales</h1></b-col>
        <b-col>new Date().toLocaleString()</b-col>
        <b-col class="text-right">
          <div>
            <b-dropdown variant="transparent" text="Customer">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="UserPlusIcon" /> Add</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="UserXIcon" /> Remove</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="UserCheckIcon" /> Profile</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="ShoppingCartIcon" /> Customer
              </template>
            </b-dropdown>
            <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="RotateCcwIcon" /> Return</b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="InboxIcon" /> On-Hold
              <b-badge variant="info" pill>2</b-badge>
              </b-dropdown-item>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="LayersIcon" /> End of Day</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="ActivityIcon" /> History</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="InboxIcon" />Open Cash Drawer</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="ToolIcon" /> Settings</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="CropIcon" />
              </template>
            </b-dropdown>
                <b-dropdown variant="transparent">
              <b-dropdown-item href="#"><feather-icon size="1x" icon="SettingsIcon" /> Settings</b-dropdown-item>
               <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="BellIcon" /> Notification
                <b-badge variant="info" pill>14</b-badge>
              </b-dropdown-item>
              <b-dropdown-item href="#"> <feather-icon size="1x" icon="MessageSquareIcon" /> Message
                <b-badge variant="info" pill>6</b-badge>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="LogOutIcon" /> Logout</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#"><feather-icon size="1x" icon="LockIcon" /> Lock</b-dropdown-item>
              <template #button-content>
                <feather-icon size="1x" icon="UserIcon" /> John Doe
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
        <b-table :items="filteredData" :fields="fields" :small="true">
          <template #cell(extPrice)="{item}">
            {{ item.quantity * item.price }}
          </template>
        </b-table>
      </perfect-scrollbar>
    </div>
    <b-container class="borders">
      <b-row>
        <b-col class="text-center"><b> 12 Items</b></b-col>
        <b-col class="text-right" cols="12" md="auto">Subtotal</b-col>
        <b-col class="text-right" col lg="2">$3,400.00</b-col>
      </b-row>

      <b-row>
        <b-col class="btn-block">
        </b-col>
        <b-col class="text-right" cols="12" md="auto">Taxes</b-col>
        <b-col class="text-right" col lg="2">$340.00</b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button-group>
            <b-button v-for="(button, key) in bottomBar"
                      variant="info"
                      class="test"
                      :key="key"
                      v-text="button"/>
          </b-button-group>
        </b-col>
        <b-col class="text-right" cols="12" md="auto"><b>Total</b></b-col>
        <b-col class="text-right" col lg="2"><b>$3,740.00</b></b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col class="text-right" cols="12" md="auto">Payment</b-col>
        <b-col class="text-right" col lg="2">$0.00</b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col class="text-right" cols="12" md="auto">Amount Due</b-col>
        <b-col class="text-right" col lg="2">$3,740.00</b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-button variant="light"><feather-icon size="1x" icon="MoreHorizontalIcon" /></b-button>
        </b-col>
        <b-col class="text-right">
          <sales-actions :sales-actions="salesActions"/>
        </b-col>
      </b-row>
    </b-container>

  </div>

</template>
<script>
import sales from '@/assets/data/sales.json';
import search from '../store/search';
import { initial, last } from 'lodash';
import SalesActions from '@/components/SalesActions';
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'Sales',
  components: { SalesActions, FeatherIcon },
  data: () => ({
    sales,
    fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))]),
    bottomBar: [
      'Cash', 'Debit', 'Credit', 'Cheque', 'Gift', 'Account'
    ]
  }),
  computed: {
    term () {
      return search.term;
    },
    filteredData () {
      return this.sales.filter(i => i.name.toLowerCase().indexOf(this.term) > -1);
    },
    salesActions () {
      return [
        { text: 'Put on Hold', action: this.putOnHold, variant: 'info' },
        { text: 'Cancel', action: this.cancel },
        { text: 'Save Only', action: this.save },
        { text: 'Save & Print', action: () => { this.save(); this.print(); } }
      ].map(item => ({ ...item, variant: item.variant || 'primary' }));
    }
  },
  methods: {
    putOnHold () {
      console.log('put on hold');
    },
    save () {
      console.log('Should save...');
    },
    cancel () {
      console.log('Should cancel...');
    },
    print () {
      console.log('Should print...');
    }
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
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, .1), 0 0 1px 0 rgba(0, 0, 0, .07), 0 1px 1px -1px rgba(0, 0, 0, .06);
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
    background-color: white;
  }

  &:before {
    content: '';
    position: absolute;
    top: 60px;
    width: 100%;
    left: 0;
  }

  .btn-space {
    margin-right: 5px;
  }
}
</style>
