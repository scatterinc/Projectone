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

<div class="header pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success bg-success">
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

  <b-col md="4">
    <b-button type="primary" block class="mb-3" @click="modals.classic = true">Default</b-button>
  </b-col>

  <b-col md="4">
    <b-button type="warning" block class="mb-3" @click="modals.notice = true">Notification</b-button>
  </b-col>

  <b-col md="4">
    <b-button type="default" block class="mb-3" @click="modals.form = true">Form</b-button>
  </b-col>
</b-row>

<div><div class="header pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success bg-success"><div class="container-fluid"><div class="header-body"><div class="row"><div class="col-md-6 col-xl-3"><div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!----><div class="card-body"><!----><!----><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5><span class="h2 font-weight-bold mb-0">350,897</span></div><div class="col-auto"><div class="icon icon-shape text-white rounded-circle shadow bg-gradient-red"><i class="ni ni-active-40"></i></div></div></div><p class="mt-3 mb-0 text-sm"><span class="text-success mr-2">3.48%</span><span class="text-nowrap">Since last month</span></p></div><!----><!----><!----><!----></div></div><div class="col-md-6 col-xl-3"><div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!----><div class="card-body"><!----><!----><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5><span class="h2 font-weight-bold mb-0">2,356</span></div><div class="col-auto"><div class="icon icon-shape text-white rounded-circle shadow bg-gradient-orange"><i class="ni ni-chart-pie-35"></i></div></div></div><p class="mt-3 mb-0 text-sm"><span class="text-success mr-2">12.18%</span><span class="text-nowrap">Since last month</span></p></div><!----><!----><!----><!----></div></div><div class="col-md-6 col-xl-3"><div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!----><div class="card-body"><!----><!----><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0">Sales</h5><span class="h2 font-weight-bold mb-0">924</span></div><div class="col-auto"><div class="icon icon-shape text-white rounded-circle shadow bg-gradient-green"><i class="ni ni-money-coins"></i></div></div></div><p class="mt-3 mb-0 text-sm"><span class="text-danger mr-2">5.72%</span><span class="text-nowrap">Since last month</span></p></div><!----><!----><!----><!----></div></div><div class="col-md-6 col-xl-3"><div class="card card-stats mb-4" show-footer-line="true"><!----><!----><!----><div class="card-body"><!----><!----><div class="row"><div class="col"><h5 class="card-title text-uppercase text-muted mb-0">Performance</h5><span class="h2 font-weight-bold mb-0">49,65%</span></div><div class="col-auto"><div class="icon icon-shape text-white rounded-circle shadow bg-gradient-info"><i class="ni ni-chart-bar-32"></i></div></div></div><p class="mt-3 mb-0 text-sm"><span class="text-success mr-2">54.8%</span><span class="text-nowrap">Since last month</span></p></div><!----><!----><!----><!----></div></div></div></div></div></div><div class="mt--7 container-fluid"><div class="row"><div class="mb-5 mb-xl-0 col-xl-8"><div class="card bg-default"><!----><!----><div class="card-header bg-transparent"><div class="row align-items-center"><div class="col"><h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6><h5 class="h3 text-white mb-0">Sales value</h5></div><div class="col"><ul class="nav nav-pills justify-content-end"><li class="nav-item mr-2 mr-md-0"><a href="#" target="_self" class="nav-link active py-2 px-3"><span class="d-none d-md-block">Month</span><span class="d-md-none">M</span></a></li><li class="nav-item"><a href="#" target="_self" class="nav-link py-2 px-3"><span class="d-none d-md-block">Week</span><span class="d-md-none">W</span></a></li></ul></div></div></div><div class="card-body"><!----><!----><div class=""><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="line-chart" width="472" height="350" style="display: block; width: 472px; height: 350px;" class="chartjs-render-monitor"></canvas></div></div><!----><!----><!----><!----></div></div><div class="mb-5 mb-xl-0 col-xl-4"><div class="card"><!----><!----><div class="card-header bg-transparent"><div class="row align-items-center"><div class="col"><h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6><h5 class="h3 mb-0">Total orders</h5></div></div></div><div class="card-body"><!----><!----><div class=""><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div><canvas id="bar-chart" width="472" height="350" class="chartjs-render-monitor" style="display: block; width: 472px; height: 350px;"></canvas></div></div><!----><!----><!----><!----></div></div></div><div class="row mt-5"><div class="mb-5 mb-xl-0 col-xl-8"><div class="card"><!----><div class="card-header border-0"><div class="row align-items-center"><div class="col"><h3 class="mb-0">Page visits</h3></div><div class="text-right col"><a href="#!" class="btn btn-sm btn-primary">See all</a></div></div></div><div class="card-body p-0"><!----><!----><div class="el-table table-responsive table el-table--fit el-table--enable-row-hover el-table--enable-row-transition"><div class="hidden-columns"><div></div><div></div><div></div><div></div></div><div class="el-table__header-wrapper"><table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 520px;"><colgroup><col name="el-table_1_column_1" width="179"><col name="el-table_1_column_2" width="95"><col name="el-table_1_column_3" width="123"><col name="el-table_1_column_4" width="123"><col name="gutter" width="0"></colgroup><thead class="has-gutter"><tr class="thead-light"><th colspan="1" rowspan="1" class="el-table_1_column_1     is-leaf"><div class="cell">Page name</div></th><th colspan="1" rowspan="1" class="el-table_1_column_2     is-leaf"><div class="cell">Visitors</div></th><th colspan="1" rowspan="1" class="el-table_1_column_3     is-leaf"><div class="cell">Unique users</div></th><th colspan="1" rowspan="1" class="el-table_1_column_4     is-leaf"><div class="cell">Bounce rate</div></th><th class="gutter" style="width: 0px; display: none;"></th></tr></thead></table></div><div class="el-table__body-wrapper is-scrolling-none"><table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 520px;"><colgroup><col name="el-table_1_column_1" width="179"><col name="el-table_1_column_2" width="95"><col name="el-table_1_column_3" width="123"><col name="el-table_1_column_4" width="123"></colgroup><tbody><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell"><div class="font-weight-600">/argon/</div></div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">4,569</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">340</div></td><td rowspan="1" colspan="1" class="el-table_1_column_4  "><div class="cell">
        46,53%
      </div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell"><div class="font-weight-600">/argon/index.html</div></div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">3,985</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">319</div></td><td rowspan="1" colspan="1" class="el-table_1_column_4  "><div class="cell">
        46,53%
      </div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell"><div class="font-weight-600">/argon/charts.html</div></div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">3,513</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">294</div></td><td rowspan="1" colspan="1" class="el-table_1_column_4  "><div class="cell">
        36,49%
      </div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell"><div class="font-weight-600">/argon/tables.html</div></div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">2,050</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">147</div></td><td rowspan="1" colspan="1" class="el-table_1_column_4  "><div class="cell">
        50,87%
      </div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_1_column_1  "><div class="cell"><div class="font-weight-600">/argon/profile.html</div></div></td><td rowspan="1" colspan="1" class="el-table_1_column_2  "><div class="cell">1,795</div></td><td rowspan="1" colspan="1" class="el-table_1_column_3  "><div class="cell">190</div></td><td rowspan="1" colspan="1" class="el-table_1_column_4  "><div class="cell">
        46,53%
      </div></td></tr><!----></tbody></table><!----><!----></div><!----><!----><!----><!----><div class="el-table__column-resize-proxy" style="display: none;"></div></div></div><!----><!----></div></div><div class="mb-5 mb-xl-0 col-xl-4"><div class="card"><!----><div class="card-header border-0"><div class="row align-items-center"><div class="col"><h3 class="mb-0">Social traffic</h3></div><div class="text-right col"><button type="button" class="btn base-button btn-primary btn-sm"><!---->See all</button></div></div></div><div class="card-body p-0"><!----><!----><div class="el-table table-responsive table el-table--fit el-table--enable-row-hover el-table--enable-row-transition"><div class="hidden-columns"><div></div><div></div><div></div></div><div class="el-table__header-wrapper"><table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 520px;"><colgroup><col name="el-table_2_column_5" width="135"><col name="el-table_2_column_6" width="128"><col name="el-table_2_column_7" width="257"><col name="gutter" width="0"></colgroup><thead class="has-gutter"><tr class="thead-light"><th colspan="1" rowspan="1" class="el-table_2_column_5     is-leaf"><div class="cell">Referral</div></th><th colspan="1" rowspan="1" class="el-table_2_column_6     is-leaf"><div class="cell">Visitors</div></th><th colspan="1" rowspan="1" class="el-table_2_column_7     is-leaf"><div class="cell"></div></th><th class="gutter" style="width: 0px; display: none;"></th></tr></thead></table></div><div class="el-table__body-wrapper is-scrolling-none"><table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 520px;"><colgroup><col name="el-table_2_column_5" width="135"><col name="el-table_2_column_6" width="128"><col name="el-table_2_column_7" width="257"></colgroup><tbody><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_2_column_5  "><div class="cell"><div class="font-weight-600">Facebook</div></div></td><td rowspan="1" colspan="1" class="el-table_2_column_6  "><div class="cell">1,480</div></td><td rowspan="1" colspan="1" class="el-table_2_column_7  "><div class="cell"><div class="d-flex align-items-center"><span class="mr-2">60%</span><div class="wrapper"><!----><div class="progress" size="" style="height: 3px;"><div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60" class="progress-bar bg-gradient-danger" style="width: 60%;"><!----></div></div></div></div></div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_2_column_5  "><div class="cell"><div class="font-weight-600">LinkedIn</div></div></td><td rowspan="1" colspan="1" class="el-table_2_column_6  "><div class="cell">5,480</div></td><td rowspan="1" colspan="1" class="el-table_2_column_7  "><div class="cell"><div class="d-flex align-items-center"><span class="mr-2">70%</span><div class="wrapper"><!----><div class="progress" size="" style="height: 3px;"><div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70" class="progress-bar bg-gradient-success" style="width: 70%;"><!----></div></div></div></div></div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_2_column_5  "><div class="cell"><div class="font-weight-600">Google</div></div></td><td rowspan="1" colspan="1" class="el-table_2_column_6  "><div class="cell">4,807</div></td><td rowspan="1" colspan="1" class="el-table_2_column_7  "><div class="cell"><div class="d-flex align-items-center"><span class="mr-2">80%</span><div class="wrapper"><!----><div class="progress" size="" style="height: 3px;"><div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="80" class="progress-bar bg-gradient-primary" style="width: 80%;"><!----></div></div></div></div></div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_2_column_5  "><div class="cell"><div class="font-weight-600">Instagram</div></div></td><td rowspan="1" colspan="1" class="el-table_2_column_6  "><div class="cell">3,678</div></td><td rowspan="1" colspan="1" class="el-table_2_column_7  "><div class="cell"><div class="d-flex align-items-center"><span class="mr-2">75%</span><div class="wrapper"><!----><div class="progress" size="" style="height: 3px;"><div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="75" class="progress-bar bg-gradient-info" style="width: 75%;"><!----></div></div></div></div></div></td></tr><tr class="el-table__row"><td rowspan="1" colspan="1" class="el-table_2_column_5  "><div class="cell"><div class="font-weight-600">Twitter</div></div></td><td rowspan="1" colspan="1" class="el-table_2_column_6  "><div class="cell">2,645</div></td><td rowspan="1" colspan="1" class="el-table_2_column_7  "><div class="cell"><div class="d-flex align-items-center"><span class="mr-2">30%</span><div class="wrapper"><!----><div class="progress" size="" style="height: 3px;"><div role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="30" class="progress-bar bg-gradient-warning" style="width: 30%;"><!----></div></div></div></div></div></td></tr><!----></tbody></table><!----><!----></div><!----><!----><!----><!----><div class="el-table__column-resize-proxy" style="display: none;"></div></div></div><!----><!----></div></div></div></div></div>

<form>
  <b-row class="form-group">
    <label class="col-md-2 col-form-label form-control-label">Text</label>
    <b-col md="5">
      <b-input placeholder="Jon Snow"></b-input>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-search-input" class="col-md-2 col-form-label form-control-label">Search</label>
    <b-col md="10">
      <base-input id="example-search-input" placeholder="Tell me your secret ..."></base-input>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-email-input" class="col-md-2 col-form-label form-control-label">Email</label>
    <b-col md="10">
      <base-input type="email" autocomplete="username email" placeholder="argon@example.com" id="example-email-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-url-input" class="col-md-2 col-form-label form-control-label">URL</label>
    <b-col md="10">
      <base-input type="url" placeholder="https://www.creative-tim.com" id="example-url-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-tel-input" class="col-md-2 col-form-label form-control-label">Phone</label>
    <b-col md="10">
      <base-input type="tel" placeholder="40-(770)-888-444" id="example-tel-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-password-input"
           class="col-md-2 col-form-label form-control-label">Password</label>
    <b-col md="10">
      <base-input type="password" autocomplete="current-password" placeholder="password" id="example-password-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-number-input" class="col-md-2 col-form-label form-control-label">Number</label>
    <b-col md="10">
      <base-input type="number" placeholder="23" id="example-number-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-datetime-local-input" class="col-md-2 col-form-label form-control-label">Datetime</label>
    <b-col md="10">
      <base-input type="datetime-local" value="2018-11-23T10:30:00" id="example-datetime-local-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-date-input" class="col-md-2 col-form-label form-control-label">Date</label>
    <b-col md="10">
      <base-input type="date" value="2018-11-23" id="example-date-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-month-input" class="col-md-2 col-form-label form-control-label">Month</label>
    <b-col md="10">
      <base-input type="month" value="2018-11" id="example-month-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-week-input" class="col-md-2 col-form-label form-control-label">Week</label>
    <b-col md="10">
      <base-input type="week" value="2018-W23" id="example-week-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-time-input" class="col-md-2 col-form-label form-control-label">Time</label>
    <b-col md="10">
      <base-input type="time" value="10:30:00" id="example-time-input"/>
    </b-col>
  </b-row>
  <b-row class="form-group">
    <label for="example-color-input" class="col-md-2 col-form-label form-control-label">Color</label>
    <b-col md="10">
      <base-input type="color" value="#5e72e4" id="example-color-input"/>
    </b-col>
  </b-row>
</form>

 <b-button size="mh:100" variant="secondary" class="mh:100 w:120px">
             </b-button>
             <b-button variant="secondary"><feather-icon size="3x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
             <a/>
             <b-button variant="secondary mx-5 button3"><feather-icon size="2x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
                          <b-button variant="secondary"><feather-icon size="5x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
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
