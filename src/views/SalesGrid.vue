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
                          <a/>
             <b-button variant="secondary mx-5 button3"><feather-icon size="2x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
                          <b-button variant="secondary"><feather-icon size="5x" icon="FilePlusIcon" />New
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
                          <a/>
             <b-button variant="secondary mx-5 button3"><feather-icon size="2x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
                          <b-button variant="secondary"><feather-icon size="5x" icon="FilePlusIcon" />New
             ii
             ii<p>test</p>
             <p>test</p></b-button>
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
