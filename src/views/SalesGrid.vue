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

   <b-row class="center row container-fluid">
        <div class="row container-fluid">

            <div class="col-sm-6 col-lg-3 mt-3">

            <div class="card bg-primary text-white">
              <div class="multi-button">
              <div class="card-body pb-0 d-flex justify-content-between">
                <div>
                  <div class="text-value-lg">9.823
                    </div>
                    <div>Members online
                      </div>
                      </div>
                    </div>
                    <div class="mt-3 mx-3" style="height: 70px;">
                    </div>
                    </div>
                    </div>
             </div>

                      <div class="col-sm-6 col-lg-3 mt-3">
                        <div class="card bg-info text-white">
                          <div class="card-body pb-0 d-flex justify-content-between">
                          <div><div class="text-value-lg">9.823</div><div>Members online</div></div>
                          </div>
                              <div class="mt-3 mx-3" style="height: 70px;">
                                </div></div></div>

                            <div class="col-sm-6 col-lg-3 mt-3">
                              <div class="card bg-warning text-white"><div class="card-body pb-0 d-flex justify-content-between">
                              <div><div class="text-value-lg">9.823</div>
                              <div>Members online</div></div>
                                </div><div class="mt-3" style="height: 70px;">
                                 </div></div></div>

                                  <div class="col-sm-6 col-lg-3 mt-3">
                                    <div class="card bg-danger text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                    <div>
                                      <div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                  </div>
                                      <div class="mt-3 mx-3" style="height: 70px;">
                                        </div></div>
                                        </div>

                                  <div class="col-sm-6 col-lg-3 mt-3">
                                  <div class="card bg-warning text-white"><div class="card-body pb-0 d-flex justify-content-between">
                                  <div><div class="text-value-lg">9.823</div>
                                  <div>Members online</div></div>
                                    </div><div class="mt-3" style="height: 70px;">
                                    </div></div></div>
<!-----------------------------Need Tao help
                <container>
                  <div class="card" style="--background:#3C3B3D; --text:white;">
  <div class="multi-button"><--Don't need to say how many buttons there will be, handled on lines 42-93-
    <button class="fas fa-heart"></button>
  </div>
  <div class="container"></div>
</div>
<div class="card">
  <div class="multi-button">
    <button class="fas fa-heart"></button>
    <button class="fas fa-clipboard"></button>
  </div>
  <div class="container"></div>
</div>
<div class="card" style="--background:#EC87C0; --text:white;">
  <div class="multi-button">
    <button class="fas fa-heart"></button>
    <button class="fas fa-comment"></button>
    <button class="fas fa-share-alt"></button>
  </div>
  <div class="container"></div>
</div>
<div class="card" style="--background:#5D9CEC; --text:white;">
  <div class="multi-button">
    <button class="fas fa-heart"></button>
    <button class="fas fa-comment"></button>
    <button class="fas fa-share-alt"></button>
    <button class="fas fa-trash"></button>
  </div>
  <div class="container"></div>
</div>
                  </container>
                  https://codepen.io/z00f9eb5633/pen/WNbMjEW
                  ---------->

  </div>

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
<style lang="scss">

</style>
<style lang="scss">

    .card {
        --background:#FFFFFF;
        --text:black;
        position: relative;
        height:12rem;
        box-shadow:0 0 2rem -1rem rgba(0,0,0,.05);
        .multi-button {
            z-index:0;
            position: absolute;
            top:1.25rem;
            left:1.25rem;
            border-radius:100%;
            width:0rem;
            height:0rem;
            transform: translate(-50%, -50%);
            transition: .25s cubic-bezier(0.25, 0, 0, 1);
            button {
                display: grid;
                place-items: center;
                position: absolute;
                width:2rem;
                height:2rem;
                border:none;
                border-radius:100%;
                background:var(--background);
                color:var(--text);
                transform: translate(-50%, -50%);
                cursor: pointer;
                transition: .25s cubic-bezier(0.25, 0, 0, 1);
                box-shadow:0 0 0rem -.25rem var(--background);
                &:hover {
                    background:var(--text);
                    color:var(--background);
                    box-shadow:0 0 1rem -.25rem var(--background);
                }
                &:first-child:nth-last-child(1),
                &:first-child:nth-last-child(1) ~ * { //If there is 1 child
                    &:nth-child(1) {
                        left:25%;
                        top:25%;
                    }
                }
                &:first-child:nth-last-child(2),
                &:first-child:nth-last-child(2) ~ * { //If there are 2 children
                    &:nth-child(1) {
                        left:37.5%;
                        top:18.75%;
                    }
                    &:nth-child(2) {
                        left:18.75%;
                        top:37.5%;
                    }
                }
                &:first-child:nth-last-child(3),
                &:first-child:nth-last-child(3) ~ * { //If there are 3 children
                    &:nth-child(1) {
                        left:50%;
                        top:15.625%;
                    }
                    &:nth-child(2) {
                        left:25%;
                        top:25%;
                    }
                    &:nth-child(3) {
                        left:15.625%;
                        top:50%;
                    }
                }
                &:first-child:nth-last-child(4), //If there are 4 children, if first child is also 4th item from bottom get self, and
                &:first-child:nth-last-child(4) ~ * { //If there are 4 children, if first child is also 4th item from bottom get siblings
                    &:nth-child(1) {
                        left:62.5%;
                        top:18.75%;
                    }
                    &:nth-child(2) {
                        left:37.5%;
                        top:18.75%;
                    }
                    &:nth-child(3) {
                        left:18.75%;
                        top:37.5%;
                    }
                    &:nth-child(4) {
                        left:18.75%;
                        top:62.5%;
                    }
                }
            }
        }
        .container {
            position: absolute;
            width:100%;
            height:100%;
            border-radius:1rem;
            background:var(--background);
            color:var(--text);
        }
        &:hover .multi-button, .multi-button:focus-within { //Hover or a button inside is focused
            width:10rem;
            height:10rem;
        }
    }
</style>
