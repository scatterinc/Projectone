<template>
<div>
  <b-container :fluid="true" class="accounting">
    <b-row>
      <b-col>
        <div class="d-flex justify-content-between">
          <h1>Journal</h1>
          <div>
            <b-button-group>
              <b-button variant="outline-secondary">Share</b-button>
              <b-button class="mr-2" variant="outline-secondary">Export</b-button>
                         </b-button-group>
                           <b-button variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" />New</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" />Save</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="DeleteIcon" />Delete</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="CopyIcon" />Create a Copy</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="RotateCcwIcon" />Reverse</b-button>
                           <b-button variant="transparent"><feather-icon size="1x" icon="PaperclipIcon" />Attached File</b-button>
            <dropdown-bar-item v-for="(dd, key) in dropdownBar"
                               v-bind="dd"
                               :key="key" />
                </div>

        </div>
      </b-col>
    </b-row>
  </b-container>
  <p class="border-top"></p>

<!-----First Row--->
  <b-row class="fluid">
    <b-col class=text-right> <b>Date </b>
       </b-col>
    <b-col>
        <b-input-group class="mb-2">
      <b-form-input
        id="example-input"
        class="mx-5"
        v-model="value"
        type="date"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input>

    </b-input-group>
  </b-col>
    <b-col><!---leave blank--></b-col>
    <b-col class="text-right">Debit</b-col>
    <b-col class="border mb-2 mx-4 text-right">$10,000</b-col>
  </b-row>

   <!-----Row Two--->
<!-----First Row--->
  <b-row>
    <b-col class=text-right> <b>Jounral Entry No. </b>
       </b-col>
    <b-col>
        <b-input-group class="mb-2">
      <b-form-input
        id="example-input"
        class="mx-5"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input>
       </b-input-group>
  </b-col>
    <b-col><!---leave blank--></b-col>
    <b-col class="text-right">Credit</b-col>
    <b-col class="border mb-2 mx-4 text-right">-$10,000</b-col>
  </b-row>
   <!-----First Row--->
  <b-row>
    <b-col class=text-right> <b>Adjusted Entry </b>
       </b-col>
    <b-col >
<b-form-checkbox class="mx-4" ></b-form-checkbox>
  </b-col>
    <b-col><!---leave blank--></b-col>
    <b-col class="text-right">Difference</b-col>
    <b-col class="border mx-4 text-right">$0,00</b-col>
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
        { name: 'Memorize', icon: 'CpuIcon' },
        { name: 'Template', icon: 'FileTextIcon' },
        null,
        { name: 'Document Centre', icon: 'ArchiveIcon' },
        null,
        { name: 'Upload', icon: 'UploadIcon' }
      ]
    }].concat(userDropdown)
  })
};
</script>
