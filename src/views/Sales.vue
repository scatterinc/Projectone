<template>
  <div class="sales">
    <b-container class="Sales Header">
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
     <b-dropdown variant="transparent" icon="SettingsIcon" text="John Doe" >
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
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
            {{ item.quantity *  item.price }}
          </template>
        </b-table>
      </perfect-scrollbar>
    </div>
    <b-container   class="borders">
  <b-row>
    <b-col class="text-center"><b> 12 Items</b></b-col>
    <b-col  class="text-right" cols="12" md="auto">Subtotal</b-col>
    <b-col class="text-right" col lg="2">$3,400.00</b-col>
  </b-row>

<b-row>
    <b-col class="btn-block">
       </b-col>
    <b-col  class="text-right" cols="12" md="auto">Taxes</b-col>
    <b-col class="text-right" col lg="2">$340.00</b-col>
  </b-row>
<b-row>
    <b-col class="btn-block">
       <b-button variant="info" class="btn btn-space">Cash</b-button><a></a>
  <b-button variant="info" class="btn btn-space">Debit</b-button><a></a>
  <b-button variant="info" class="btn btn-space">Credit</b-button><a></a>
  <b-button variant="info" class="btn btn-space">Cheque</b-button><a></a>
  <b-button variant="info" class="btn btn-space">Gift</b-button><a></a>
  <b-button variant="info" class="btn btn-space">Account</b-button>
      </b-col>
    <b-col  class="text-right" cols="12" md="auto"><b>Total</b></b-col>
    <b-col class="text-right" col lg="2"><b>$3,740.00</b></b-col>
  </b-row>

 </b-container>
<b-container>
  <b-row>
    <b-col></b-col>
    <b-col  class="text-right" cols="12" md="auto">Payment</b-col>
    <b-col class="text-right" col lg="2">$0.00</b-col>
  </b-row>
<b-row>
    <b-col></b-col>
    <b-col  class="text-right" cols="12" md="auto">Amount Due</b-col>
    <b-col class="text-right" col lg="2">$3,740.00</b-col>
  </b-row>
   </b-container>

   <b-container class="bv-example-row">
  <b-row>
    <b-col><b-button variant="light">Light</b-button></b-col>
    <b-col class="text-right">
       <b-button variant="info" class="btn btn-space">Put on Hold</b-button><a></a>
    <b-button variant="secondary" class="btn btn-space">Cancel</b-button><a></a>
      <b-button variant="secondary" class="btn btn-space">Save Only</b-button><a></a>
        <b-button variant="secondary" class="btn btn-space">Save & Print</b-button><a></a>
        </b-col>
  </b-row>
   </b-container>

  </div>

</template>
<script>
import sales from '@/assets/data/sales.json';
import search from '../store/search';
import { initial, last } from 'lodash';
export default {
  name: 'Sales',
  data: () => ({
    sales,
    fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))])
  }),
  computed: {
    term () {
      return search.term;
    },
    filteredData () {
      return this.sales.filter(i => i.name.toLowerCase().indexOf(this.term) > -1);
    }
  },
  mounted () {
    console.log(sales);
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
  .btn-space {
    margin-right: 5px;
}
}
</style>
