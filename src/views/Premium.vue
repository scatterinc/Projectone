<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Premium</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
            </b-button-group>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <p class="border-top"></p>

<div class="header pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success bg-light">
  <div class="container-fluid">
    <div class="header-body">
      <div class="row">
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
            <div class="col-md-6 col-xl-3">
              <div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!----><div class="card-body"><!----><!----><div class="row">
                <div class="col"><h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5><span class="h2 font-weight-bold mb-0">2,356</span>
                </div><div class="col-auto"><div class="icon icon-shape text-white rounded-circle shadow bg-gradient-orange">
                  <i class="ni ni-chart-pie-35"></i></div></div></div><p class="mt-3 mb-0 text-sm">
                    <span class="text-success mr-2">12.18%</span><span class="text-nowrap">Since last month</span
                    ></p></div><!----><!----><!----><!----></div></div><div class="col-md-6 col-xl-3">
                      <div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!---->
                      <div class="card-body"><!----><!----><div class="row">
                        <div class="col"><h5 class="card-title text-uppercase text-muted mb-0">Sales</h5><span class="h2 font-weight-bold mb-0">924</span>
                        </div><div class="col-auto"><div class="icon icon-shape text-white rounded-circle shadow bg-gradient-green"><i class="ni ni-money-coins"></i>
                        </div></div></div><p class="mt-3 mb-0 text-sm"><span class="text-danger mr-2">5.72%</span><span class="text-nowrap">Since last month</span></p>
                        </div><!----><!----><!----><!----></div></div><div class="col-md-6 col-xl-3"><div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!---->
                        <div class="card-body"><!----><!----><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0">Performance</h5><span class="h2 font-weight-bold mb-0">49,65%</span></div><div class="col-auto"><div class="icon icon-shape text-white rounded-circle shadow bg-gradient-info"><i class="ni ni-chart-bar-32"></i>
                        </div>
                        </div>
                        </div><p class="mt-3 mb-0 text-sm"><span class="text-success mr-2">54.8%</span><span class="text-nowrap">Since last month</span></p>
                        </div><!----><!----><!----><!----></div></div></div></div></div></div>

                        <b-row>

  </b-row>

  </div>
</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import userDropdown from '@/util/userDropdown';

export default {
  components: { DropdownBarItem },
  data: () => ({
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
