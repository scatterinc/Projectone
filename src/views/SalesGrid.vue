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
          <p class="border-top mb-4"></p>
                  <b-row variant="transparent">
    <b-col class="border mb-4" cols="12" md="8">
 <p/>
   <b-row class=" text-center center row container-fluid">
        <div class="row container-fluid">
<div>
  <b-list-group horizontal="md" class="mb-4 flex-fill">
    <b-list-group-item  button class="mr-4 ml-4  mb-4">
      <div class="text-left">Chicken Foot Soup</div>
<div class="text-right">$2,000</div>
    </b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left" >Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Morbi leo risus</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
   </b-list-group>
</div>
<div>
  <b-list-group horizontal="md" class="mb-4 flex-fill">
    <b-list-group-item  button class="mr-4 ml-4 mb-4">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left" >Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Morbi leo risus</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
   </b-list-group>
</div>
<div>
  <b-list-group horizontal="md" class="mb-4 flex-fill">
    <b-list-group-item  button class="mr-4 ml-4  mb-4">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left" >Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Morbi leo risus</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
   </b-list-group>
</div>
<div>
  <b-list-group horizontal="md" class="mb-4 flex-fill">
    <b-list-group-item  button class="mr-4 ml-4  mb-4">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left" >Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Morbi leo risus</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
   </b-list-group>
</div>
<div>
  <b-list-group horizontal="md" class="mb-4 flex-fill">
    <b-list-group-item  button class="mr-4 ml-4  mb-4">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left" >Dapibus ac facilisis in</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Morbi leo risus</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left">Cras justo odio</b-list-group-item>
   </b-list-group>
</div>

  </div>

  </b-row>

    </b-col>
    <b-col class="border" cols="6" md="4">
      <p/>
      <div>
  <b-list-group horizontal="md" class="mb-2 flex-fill">
    <b-list-group-item  button class="mr-4 text-center" >Customer</b-list-group-item>
    <b-list-group-item  button class="mr-4  border-left text-center" >Table</b-list-group-item>
       </b-list-group>
</div>
      <div class="table-gridcontainer">
                    <b-table class="text-center" :items="filteredData" :fields="fields" :small="true">
          <template #cell(extPrice)="{item}">
            {{ formatCurrency(item.quantity * item.price) }}
          </template>
        </b-table>
      </div>
      <!-----
      <div>
        <b-row>
          <b-col class="border-top">
          </b-col>
          <b-col class="border-top text-right">
            Subtotal
          </b-col>
            <b-col class="border-top text-right">
            $10,000
          </b-col>
        </b-row>
                <b-row>
          <b-col class="border">
          </b-col>
          <b-col class="border text-right">
            Tax
          </b-col>
            <b-col class="border text-right">
            $10
          </b-col>
        </b-row>--->
        <div>
                <b-row>
          <b-col class="border-bottom bg-primary">
          </b-col>
          <b-col class="border-bottom text-right bg-primary">
            <b style="color:green" ><font size="5" >Total</font></b>
          </b-col>
            <b-col class="border-bottom text-right bg-primary">
             <b style="color:green" ><font size="5" >$ 10,000</font></b>
          </b-col>
        </b-row>
      </div>
      <!----
      <div>
  <b-list-group horizontal>
    <b-list-group-item button class="text-center">1</b-list-group-item>
    <b-list-group-item button class="text-center">2</b-list-group-item>
    <b-list-group-item button class="text-center">3</b-list-group-item>
    <b-list-group-item button class="text-center">Clr</b-list-group-item>
  </b-list-group>
</div>
       <div>
  <b-list-group horizontal='sm'>
    <b-list-group-item button class="text-center">4</b-list-group-item>
    <b-list-group-item button class="text-center">5</b-list-group-item>
    <b-list-group-item button class="text-center"> 6</b-list-group-item>
    <b-list-group-item button class="text-center">OK</b-list-group-item>
  </b-list-group>
</div>
       <div>
  <b-list-group horizontal>
    <b-list-group-item button class="text-center">7</b-list-group-item>
    <b-list-group-item button class="text-center">8</b-list-group-item>
    <b-list-group-item button class="text-center">9</b-list-group-item>
    <b-list-group-item button class="text-center">0</b-list-group-item>
  </b-list-group>
</div> --->
<p/>
<div>
  <b-list-group horizontal="md" class="mb-4 flex-fill">
    <b-list-group-item  button class="mr-4 mb-4 text-center" variant="danger">Delete</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left text-center" variant="info" >Order</b-list-group-item>
    <b-list-group-item  button class="mr-4 mb-4 border-left text-center" variant="success">Pay</b-list-group-item>
   </b-list-group>
</div>
    </b-col>
          </b-row>
    </div>

</template>
<script>
import DropdownBarItem from '@/components/DropdownBarItem.vue';
import saleDnaDropdown from '@/util/saleDnaDropdown';
import userDropdown from '@/util/userDropdown';
import DateTime from '@/util/datetime';

export default {
  components: { DropdownBarItem },
  mixins: { DateTime },
  data: () => ({
    /* fields: initial(Object.keys(sales[0])).concat([{
      key: 'extPrice',
      label: 'Ex. Price'
    }, last(Object.keys(sales[0]))]), */
    fields: [
      'name', 'QTY', 'extPrice'
    ],
    dropdownBar: [].concat(saleDnaDropdown, userDropdown)
  })
};
</script>
<style lang="scss">
  .table-gridcontainer {
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    height: 450px;

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
