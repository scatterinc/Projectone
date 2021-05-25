<template>
        <div>
        <b-row>
            <b-col cols="2" offset-md="2">
            <h4>Deductions</h4>
            </b-col>
                        <b-col class="mb-2">
                <b-button variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" /> New</b-button>
                <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" /> Save</b-button>
                <b-button class='mr-4' variant="transparent"><feather-icon size="1x" icon="DeleteIcon" /> Delete</b-button>
                                    </b-col>
        </b-row>
        <b-row class="mt-2">
       <b-col  offset-md="1">
             <h5 style="color:red">SNOW Ariël</h5>
       </b-col>
        </b-row>

         <b-table striped hover :items="filteredData" :fields="fields" :small="true" class="Mx- mt-1">
        </b-table>

        </div>
</template>
<script>
export default {
  name: 'PayrollDeduction',
  data: () => ({
    fields: [
      { label: 'Deduction Name' }, 'Amount', 'Deduct', 'Type', 'Effective Date', 'End Date', 'Frequency'
    ]
  })
};
</script>
