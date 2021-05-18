<template>
<div class="WorkSheetHome">
    <h5>Overview:</h5>
                          <b-table striped hover :items="filteredData" :fields="fields" :small="true"
                    class="Mx-4"
                    >
        <template v-slot:cell(#)="row">
   <b-form-group>
       <input type="checkbox" v-model="row.item.selected" />
   </b-form-group>
</template>
        </b-table>

 </div>
</template>
<script>
export default {
  name: 'WorkSheetHome',
  data: () => ({
    fields: [
      '#', 'Entity', 'Year End', 'Status', 'Authorization'
    ]
  })
};
</script>
