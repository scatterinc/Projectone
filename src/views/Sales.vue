<template>
  <div class="sales">
    <b-row>
      <b-col><h1>Sales</h1></b-col>
      <b-col>2 of 3</b-col>
      <b-col class="text-right">
        <div>
          <b-dropdown variant="transparent" text="Customer">
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
          </b-dropdown>
          <b-dropdown variant="transparent" text="Text2">
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
          </b-dropdown>
          <b-dropdown variant="transparent" icon="SettingsIcon">
            <b-dropdown-item href="#">An item</b-dropdown-item>
            <b-dropdown-item href="#">Another item</b-dropdown-item>
            <template #button-content>
              <feather-icon size="1x" icon="UserIcon" /> John Doe
            </template>
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
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
            <template v-for="(button, key) in bottomBar">
              <b-button v-b-modal="button.modal"
                        variant="info"
                        class="test"
                        :key="key"
                        v-text="button.name" />
            </template>
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
          <b-button variant="light">Light</b-button>
        </b-col>
        <b-col class="text-right">
          <sales-actions :sales-actions="salesActions"/>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="example">
      TEST
    </b-modal>
  </div>
</template>
<script>
import sales from '@/assets/data/sales.json';
import search from '../store/search';
import { initial, last } from 'lodash';
import SalesActions from '@/components/SalesActions';
import FeatherIcon from '@/components/FeatherIcon';
import putOnHold from '@/mixins/putOnHold';

export default {
  name: 'Sales',
  components: { SalesActions, FeatherIcon },
  mixins: [putOnHold],
  data: () => ({
    sales,
    fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))]),
    bottomBar: [
      { name: 'Cash', modal: 'example' }, 'Debit', 'Credit', 'Cheque', 'Gift', 'Account'
    ].map(item => typeof item === 'string' ? { name: item } : item)
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
.sales {
  .table-header-borders {
    height: 34px;
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
}
.modal-backdrop {
  opacity: .42;
}
</style>
