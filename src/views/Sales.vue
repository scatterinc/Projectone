<template>
  <div class="sales">
    <b-container class="Sales Header">
      <b-row>
        <b-col><h1>Sales</h1></b-col>
        <b-col class="d-flex align-items-center">
          {{ timeString }}
        </b-col>
        <b-col class="d-flex align-items-center justify-content-end">
          <div>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key"/>
          </div>
        </b-col>
      </b-row>
          </b-container>
          <p class="border-top"></p>
    <div class="position-relative">
      <div class="table-header-borders"></div>
    </div>
    <div class="table-container">
      <perfect-scrollbar>
        <b-table :items="filteredData" :fields="fields" :small="true">
          <template #cell(extPrice)="{item}">
            {{ formatCurrency(item.quantity * item.price) }}
          </template>
          <!----QUANTITY INPUT--->
          <template #cell(quantity)="{item, value}">
          <b-input class="w-25 text-right" :value="value" @input="updateQty($event, item)" type="number" min="1"/>
          </template>
        </b-table>
      </perfect-scrollbar>
    </div>
    <b-container class="borders">
      <b-row>
        <b-col class="text-center"><b> {{count}} Items</b></b-col>
        <b-col class="text-right" cols="12" md="auto">Subtotal</b-col>
        <b-col class="text-right" col lg="2">{{ formatCurrency(subTotal) }}</b-col>
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
                        @click="updateEditingModal(button.modalTitle, button.amountProp)"
                        variant="info"
                        class="test"
                        :key="key"
                        v-text="button.name"/>
            </template>
          </b-button-group>
        </b-col>
        <b-col class="text-right" cols="12" md="auto"><b>Total</b></b-col>
        <b-col class="text-right" col lg="2"><b>{{ formatCurrency(total) }}</b></b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col class="text-right" cols="12" md="auto">Payment</b-col>
        <b-col class="text-right" col lg="2">{{ formatCurrency(paymentAmount) }}</b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col class="text-right" cols="12" md="auto">Amount Due</b-col>
        <b-col class="text-right" col lg="2">{{ formatCurrency(amountdue) }}</b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row">
      <b-row>
        <b-col class="text-left">
          <b-button v-b-modal.modal-sm  variant="light">
            <feather-icon size="1x" icon="MoreHorizontalIcon"/>
          </b-button>
        </b-col>
        <b-col class="text-right">
          <sales-actions :sales-actions="salesActions"/>
        </b-col>
      </b-row>
    </b-container>

<b-modal id="modal-sm" size="sm" centered title="Saleviewswitch">Hello Small Modal!</b-modal>

  </div>
</template>
<script>
import search from '../store/search';
import SalesActions from '@/components/SalesActions';
import FeatherIcon from '@/components/FeatherIcon';
import putOnHold from '@/mixins/putOnHold';
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';
import saleDnaDropdown from '@/util/saleDnaDropdown';
import saleCusDropdown from '@/util/saleCusDropdown';
import editingModal from '@/store/editingModal';
import cart from '@/store/cart';
import datetime from '@/util/datetime';
import { formatCurrency } from '../util/helpers';
/* import Saleswitch from '../components/Saleswitch.vue'; */

export default {
  name: 'Sales',
  /* eslint-disable-next-line vue/no-unused-components */
  components: {
    SalesActions,
    FeatherIcon,
    DropdownBarItem
    /* Saleswitch */

  },
  mixins: [putOnHold],
  data: () => ({
    timeString: '',
    stopClock: false,
    /* fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))]), */
    fields: [
      'id', 'name', 'quantity', 'price', 'extPrice', 'tax'
    ],
    bottomBar: [
      {
        name: 'Cash',
        modal: 'EditingModal',
        amountProp: 'cashAmount',
        modalTitle: 'Edit cash amount'
      }, {
        name: 'Debit',
        modal: 'EditingModal',
        amountProp: 'debitAmount',
        modalTitle: 'Edit debit amount'
      }, {
        name: 'Credit',
        modal: 'EditingModal',
        amountProp: 'creditAmount',
        modalTitle: 'Edit credit amount'
      }, {
        name: 'Cheque',
        modal: 'EditingModal',
        amountProp: 'chequeAmount',
        modalTitle: 'Edit cheque amount'
      }, 'Gift', 'Account'
    ].map(item => typeof item === 'string' ? { name: item } : item),
    dropdownBar: [].concat(saleCusDropdown, saleDnaDropdown, userDropdown),
    cashAmount: 0,
    chequeAmount: 0,
    creditAmount: 0,
    debitAmount: 0,
    datetime:
      [].concat(datetime)
  }),
  mounted () {
    this.nowTime();
    const searchInput = document.querySelector('#searchInput');
    if (searchInput) {
      searchInput.focus();
    }
  },
  computed: {
    sales: {
      get () {
        return cart.items;
      },
      set (items) {
        cart.items = items;
      }
    },
    subTotal () {
      return cart.items.map(item => item.extPrice).reduce((a, b) => a + b, 0);
    },
    tax () {
      return this.subTotal * 0.2;
    },
    count () {
      return cart.items.map(item => item.quantity).reduce((a, b) => a + Number(b) || 0, 0);
    },
    total () {
      return this.subTotal + this.tax;
    },
    paymentAmount () {
      return ['cash', 'cheque', 'credit', 'debit']
        .map(prop => this[prop + 'Amount'])
        .reduce((a, b) => a + Number(b) || 0, 0);
      // return Number(this.cashAmount || 0) + Number(this.checkAmount || 0) + Number(this.debitAmount || 0) + Number(this.chequeAmount || 0);
    },
    amountdue () {
      return this.total - this.paymentAmount;
    },
    term () {
      return search.term;
    },
    filteredData () {
      return this.sales;
    },
    salesActions () {
      return [
        {
          text: 'Put on Hold',
          action: this.putOnHold,
          variant: 'info'
        },
        {
          text: 'Cancel',
          action: this.cancel
        },
        {
          text: 'Save Only',
          action: this.save
        },
        {
          text: 'Save & Print',
          action: () => {
            this.save();
            this.print();
          }
        }
      ].map(item => ({
        ...item,
        variant: item.variant || 'primary'
      }));
    },
    editingModalTitle: {
      get () {
        return editingModal.title;
      },
      set (val) {
        editingModal.title = val;
      }
    },
    editingModalAmount: {
      get () {
        return editingModal.amount;
      },
      set (val) {
        editingModal.amount = val;
      }
    }
  },
  methods: {
    formatCurrency,
    print () {
      console.log('Should print...');
    },
    updateEditingModal (title, prop) {
      editingModal.title = title;
      editingModal.amount = this[prop];
      editingModal.updater = (val) => { this[prop] = val; };
    },
    updateQty (value, item) {
      const cartItem = cart.items.find(ci => ci.id === item.id);
      cartItem.quantity = value;
    },
    nowTime () {
      this.timeString = new Date(Date.now()).toLocaleDateString('en-US',
        { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) +
        ' ' + new Date(Date.now()).toLocaleTimeString('en-US');
      if (!this.stopClock) {
        setTimeout(this.nowTime, 285);
      }
    }
  },
  beforeDestroy () {
    search.term = '';
    this.stopClock = true;
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
.b-input {
  width: 5px
}
</style>
