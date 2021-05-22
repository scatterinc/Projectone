<template>
     <b-modal id="WsUpload" size="xl" title="File Import">
  <b-form-group>
    <b-form-file cols="3" id="file-default"></b-form-file>
  </b-form-group>
       <h5 class="mt-1">Field Details</h5>
       <a>You can now specift field details.</a>
      <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
    >
    </b-table>

     </b-modal>
</template>

<script>
export default {
  name: 'WsUpload',
  data: () => ({
    fields: [
      { key: 'AccountNo', label: 'Account No.', class: 'cols-1 border' },
      { key: 'Account Name', label: 'Account Description', class: 'cols-1 border' },
      { key: 'type1a', label: 'Debit', class: 'text-center border' },
      { key: 'type1b', label: 'Credit', class: 'text-center border' },
      { key: 'type1c', label: 'Mapping Number', class: 'text-center border', variant: 'light' }
    ]
  })
};
</script>
