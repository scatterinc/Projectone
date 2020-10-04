<template>
  <div class="sales">
    <b-container class="Sales Header">
      <b-row>
        <b-col><h1>Sales</h1></b-col>
        <b-col>2 of 3</b-col>
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
        <b-col class="text-left">
          <b-button variant="light">
              <feather-icon size="1x" icon="MoreHorizontalIcon" />
          </b-button>
        </b-col>
        <b-col class="text-right">
          <sales-actions :sales-actions="salesActions"/>
        </b-col>
      </b-row>
    </b-container>
     <!-- MODAL LONG --HELP CASH-->
    <b-modal id="CashModal" centered title="Cash">
           <b-form inline class="text-right">
             <a class="mr-3"> Amount </a>
    <label class="sr-only" for="inline-form-input-name">Cashamount</label>
    <b-input
      id="PayAmount"
      class="mb-2 mr-sm-2 mb-sm-0 text-right"
      placeholder="0.00"
    ></b-input>
       </b-form>
               <template v-slot:modal-footer="{ clear, close, save }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="secondary" @click="clear('ClearFields()')">
        Clear
      </b-button>
      <b-button size="sm" variant="secondary" @click="close('forget')">
        Close
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="info" @click="save()">
        Save
      </b-button>
    </template>
    </b-modal>
     <!-- MODAL LONG --HELP Debit-->
    <b-modal id="DebitModal" centered title="Debit">
           <b-form inline class="text-right">
             <a class="mr-3"> Amount </a>
    <label class="sr-only" for="inline-form-input-name">debitamount</label>
    <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0 text-right"
      placeholder="0.00"
    ></b-input>
       </b-form>
               <template v-slot:modal-footer="{ clear, close, save }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="secondary" @click="clear()">
        Clear
      </b-button>
      <b-button size="sm" variant="secondary" @click="close('forget')">
        Close
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="info" @click="save()">
        Save
      </b-button>
    </template>
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
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';
import saleDnaDropdown from '@/util/saleDnaDropdown';
import saleCusDropdown from '@/util/saleCusDropdown';

export default {
  name: 'Sales',
  // eslint-disable-next-line vue/no-unused-components
  components: { SalesActions, FeatherIcon, DropdownBarItem },
  mixins: [putOnHold],
  data: () => ({
    sales,
    fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))]),
    bottomBar: [
      { name: 'Cash', modal: 'CashModal' }, { name: 'Debit', modal: 'DebitModal' }, 'Credit', 'Cheque', 'Gift', 'Account'
    ].map(item => typeof item === 'string' ? { name: item } : item),
    dropdownBar: [
    ].concat(saleCusDropdown, saleDnaDropdown, userDropdown)
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
.modal-backdrop {
  opacity: .42;
}
</style>
