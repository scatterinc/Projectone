<template>
<div class="WorkSheetHome">
            <b-row>
            <b-col cols="2" offset-md="2">
            <h4>Overview</h4>
            </b-col>
                        <b-col class="mb-4">
                <b-button class="mr-2" variant="info"><feather-icon size="1x" icon="FilePlusIcon" /> Add New</b-button>
                <b-button variant="success"><feather-icon size="1x" icon="RotateCwIcon" />  Roll Forward</b-button>
                                                    </b-col>
        </b-row>
                          <b-table striped hover :items="filteredData" :fields="fields" :small="true"
                    class="Mx-4">

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
