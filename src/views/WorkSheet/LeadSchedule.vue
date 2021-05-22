<template>
<div class="Schedule">
    <h5 class="mb-1">Schedule</h5>
    <h5 class="mb-1">Entity Name</h5>
    <h6 class="mb-1"> Financial Year Ended December 31, 2021</h6>
   <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
    >
        </b-table>

</div>
</template>
<script>
export default {
  name: 'Schedule',
  data: () => ({
    fields: [
      { key: 'AccountNo', label: 'Account No.', class: 'cols-1 border' },
      { key: 'Acount Description', label: 'Account Decription', class: 'cols-1 border' },
      { key: 'type1a', label: 'UnAdjusted Dec. 31. 20', class: 'text-center' },
      { key: 'type1b', label: 'Adjustment Dec. 31. 20', class: 'text-center', variant: 'light' },
      { key: 'type2a', label: 'Adjusted Dec. 31. 20', variant: 'light', class: 'text-right border' },
      { key: 'type2c', label: 'Prior Year Dec. 31. 19', class: 'text-right border' },
      { key: 'type2d', label: 'Status', class: 'text-right border' },
      { key: 'type2e', label: 'icon="paperclipIcon"', icon: 'paperclipIcon', class: 'text-right border' }
    ]
  })
};
</script>
