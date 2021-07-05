<template>
<b-modal id="SalaryCalculator" size="md" centered title="Salary Calculator">
  <b-row class='mb-4'>
    <b-col class="text-right" cols="4" >
      Calculate:
    </b-col>
    <b-col class="text-center" cols="8">
            <b-form-radio-group
               id="radio-group-1"
                v-slot="{ ariaDescribedby }"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-options"
      ></b-form-radio-group>
    </b-col>
  </b-row>
<b-row class='mb-2'>
   <b-col class='text-right' cols="5"> Annual Net</b-col> <!---Drop down--->
    <b-col cols="6"><b-input/></b-col>
         </b-row>
           <b-row class='mb-2'>
    <b-col class='text-right' cols="5"> Annual NIS Treshold</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
                <b-row class='mb-2'>
    <b-col class='text-right' cols="5"> Annual Tax Free Pay</b-col>
    <b-col cols="6"><b-input/></b-col>
     </b-row>
                <b-row class='mt-4 mb-2 text-center'>
                  <b-col class='text-right' style="color:red" cols="4"> Gross</b-col>
        <b-col  cols="6"><b-input class="text-right" placeholder="0.00"/></b-col>
     </b-row>
 </b-modal>
</template>

<script>

export default {
  name: 'SalaryCalculator',
  data: () => ({
    selected: 'first',
    options: [
      { text: 'Gross Salary', value: 'first' },
      { text: 'Net Salary', value: 'second' }
    ]
  })
};
</script>
<style scoped>

</style>
