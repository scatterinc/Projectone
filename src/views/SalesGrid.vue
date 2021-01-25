/* eslint-disable no-dupe-keys */
<template>
  <div class="sales">
    <b-container class="Sales Header">
      <b-row>
        <b-col><h1>Sales <i>Grid</i></h1></b-col>
        <b-col class="d-flex align-items-center">
          {{ new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
          {{ new Date(Date.now()).toLocaleTimeString('en-US') }}
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
          <v-button>
          test
          </v-button>
          <b-row variant="transparent">
    <b-col class="border" cols="12" md="8">
              <div class="col-md-6 col-xl-3"
        ><div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!---->
        <div class="card-body"><!----><!---->
        <div class="row"><div class="col"
        ><h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5><span class="h2 font-weight-bold mb-0">350,897</span>
        </div><div class="col-auto">
          <div class="icon icon-shape text-white rounded-circle shadow bg-gradient-red">
            <i class="ni ni-active-40"></i></div></div></div>
            <p class="mt-3 mb-0 text-sm"><span class="text-success mr-2">3.48%</span><span class="text-nowrap">Since last month</span>
            </p></div><!----><!----><!----><!----></div></div>

   <b-row class="center">
      <b-col md="2">
        <b-button type="primary" block class="mb-4" @click="modals.classic = true">Default</b-button>

      </b-col>

      <b-col md="2">
        <b-button type="warning" block class="mb-3" @click="modals.notice = true">Notification</b-button>
        </b-col>

      <b-col md="2">
        <b-button type="default" block class="mb-3" @click="modals.form = true">Form</b-button>
      </b-col>

      <b-col md="2">
        <b-button type="default" block class="mb-3" @click="modals.form = true">Form</b-button>
        <b-button type="default" block class="mb-3" @click="modals.form = true">Form</b-button>
      </b-col>

       <b-col md="2">
        <b-button type="default" block class="mb-3" @click="modals.form = true">Form</b-button>
        <b-button type="default" block class="mb-3" @click="modals.form = true">Form</b-button>
      </b-col>

  </b-row>

    </b-col>
    <b-col class="border" cols="6" md="4">
                    <b-table :items="filteredData" :fields="fields" :small="true">
          <template #cell(extPrice)="{item}">
            {{ formatCurrency(item.quantity * item.price) }}
          </template>
        </b-table>
    </b-col>
          </b-row>
    </div>

</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
    fields: [
      'name', 'QTY', 'extPrice'
    ],
    dropdownBar: [{
      name: '',
      icon: 'CropIcon',
      expanded: true,
      items: [
        { name: 'Test', icon: 'FileTextIcon' },
        { name: 'Test1', icon: 'FileTextIcon' },
        null,
        { name: 'Test2', icon: 'FileTextIcon' },
        null,
        { name: 'Test3', icon: 'FileTextIcon' }
      ]
    }].concat(userDropdown)
  })
};
</script>
