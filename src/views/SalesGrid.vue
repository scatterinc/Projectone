/* eslint-disable no-dupe-keys */
<template>
  <div class="sales">
    <b-container class="Sales Header">
      <b-row>
        <b-col><h1>Sales <i>Grid</i></h1></b-col>
        <b-col class="d-flex align-items-center">
           {{ timeString }} test
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
<div class="row"><div class="col-sm-6 col-lg-3">
  <div class="card bg-primary text-white">
    <div class="card-body pb-0 d-flex justify-content-between">
      <div>
        <div class="text-value-lg">9.823
          </div>
          <div>Members online
            </div>
            </div>
            <div class="dropdown">
              <b-button type="button" aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle btn-transparent p-0">
                <svg viewBox="0 0 400 400" role="img" class="c-icon">
                <path fill="var(--ci-primary-color, currentColor)" d="M245.151,168a88" class="ci-primary">
                  </path><path fill="var(primary-color, currentColor)"  class="ci-primary">
                    </path>
                    </svg>
                    </b-button><!----><div class="dropdown-menu" style="margin: 0px;"><a role="menuitem" href="#" target="_self" class="dropdown-item">Action</a>
                    <a role="menuitem" href="#" target="_self" class="dropdown-item">Another action</a>
                    <a role="menuitem" href="#" target="_self" class="dropdown-item">Something else here...</a>
                    <a role="menuitem" href="#" target="_self" tabindex="-1" aria-disabled="true" class="dropdown-item disabled">Disabled action</a></div></div></div><div class="mt-3 mx-3" style="height: 70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class="">
                      </div></div>
                      <div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="__safe_id__3760" width="346" height="70" class="chartjs-render-monitor" style="display: block; width: 346px; height: 70px;"></canvas><div id="__safe_id__3760-tooltip" class="c-chartjs-tooltip top" style="opacity: 0; left: 140.429px; top: 93.2444px;"><div class="c-tooltip-header"><div class="c-tooltip-header-item">March</div></div><div class="c-tooltip-body"><div class="c-tooltip-body-item">
                    <span class="c-tooltip-body-item-color" style="background-color: rgb(50, 31, 219);">
                      </span>
                      <span class="c-tooltip-body-item-label">Members</span>
                      <span class="c-tooltip-body-item-value">84</span>
                      </div></div></div></div></div></div><div class="col-sm-6 col-lg-3">
                        <div class="card bg-info text-white"><div class="card-body pb-0 d-flex justify-content-between"><div>
                          <div class="text-value-lg">9.823</div><div>Members online</div></div><div class="dropdown">
                            <button type="button" aria-expanded="false" aria-haspopup="true" class="btn btn-transparent p-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon"><path fill="var(--ci-primary-color, currentColor)" d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z" class="ci-primary"></path></svg></button><!----><div class="dropdown-menu"><a role="menuitem" href="#" target="_self" class="dropdown-item">Action</a><a role="menuitem" href="#" target="_self" class="dropdown-item">Another action</a><a role="menuitem" href="#" target="_self" class="dropdown-item">Something else here...</a><a role="menuitem" href="#" target="_self" tabindex="-1" aria-disabled="true" class="dropdown-item disabled">Disabled action</a></div></div></div><div class="mt-3 mx-3" style="height: 70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="__safe_id__3769" width="346" height="70" class="chartjs-render-monitor" style="display: block; width: 346px; height: 70px;"></canvas></div></div></div><div class="col-sm-6 col-lg-3"><div class="card bg-warning text-white"><div class="card-body pb-0 d-flex justify-content-between">
                              <div><div class="text-value-lg">9.823</div><div>Members online</div></div><div class="dropdown"><button type="button" aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle btn-transparent p-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon"><path fill="var(--ci-primary-color, currentColor)" d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z" class="ci-primary"></path></svg></button><!----><div class="dropdown-menu"><a role="menuitem" href="#" target="_self" class="dropdown-item">Action</a><a role="menuitem" href="#" target="_self" class="dropdown-item">Another action</a><a role="menuitem" href="#" target="_self" class="dropdown-item">Something else here...</a><a role="menuitem" href="#" target="_self" tabindex="-1" aria-disabled="true" class="dropdown-item disabled">Disabled action</a></div></div></div><div class="mt-3" style="height: 70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="__safe_id__3778" width="378" height="70" class="chartjs-render-monitor" style="display: block; width: 378px; height: 70px;"></canvas></div></div></div><div class="col-sm-6 col-lg-3"><div class="card bg-danger text-white"><div class="card-body pb-0 d-flex justify-content-between"><div><div class="text-value-lg">9.823</div><div>Members online</div></div><div class="dropdown"><button type="button" aria-expanded="false" aria-haspopup="true" class="btn dropdown-toggle btn-transparent p-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" class="c-icon"><path fill="var(--ci-primary-color, currentColor)" d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z" class="ci-primary"></path><path fill="var(--ci-primary-color, currentColor)" d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z" class="ci-primary"></path></svg></button><!----><div class="dropdown-menu"><a role="menuitem" href="#" target="_self" class="dropdown-item">Action</a><a role="menuitem" href="#" target="_self" class="dropdown-item">Another action</a><a role="menuitem" href="#" target="_self" class="dropdown-item">Something else here...</a><a role="menuitem" href="#" target="_self" tabindex="-1" aria-disabled="true" class="dropdown-item disabled">Disabled action</a></div></div></div><div class="mt-3 mx-3" style="height: 70px;"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="__safe_id__3787" width="346" height="70" class="chartjs-render-monitor" style="display: block; width: 346px; height: 70px;"></canvas></div></div></div></div>

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
    timeString: '',
    stopClock: false,
    /* fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))]), */
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
  }),
  mounted () {
    this.nowTime();
  },
  nowTime () {
    this.timeString = new Date(Date.now()).toLocaleDateString('en-US',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) +
        ' ' + new Date(Date.now()).toLocaleTimeString('en-US');
    if (!this.stopClock) {
      setTimeout(this.nowTime, 285);
    }
  }
};
</script>
