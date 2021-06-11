<template>
<b-modal id="NewAdjJournal" size="lg" centered title="Adjusting Journal Entry">
<b-row>
  <b-col>
    Entity
      </b-col>
      <b-col>
     </b-col>
  <b-col class="text-right" >
    Debit
  </b-col>
      <b-col class="border text-right">
        </b-col>
</b-row>
<b-row>
  <b-col>
    Entry No.
  </b-col>
      <b-col>
         </b-col>
  <b-col class="text-right">
    Credit
  </b-col>
      <b-col class="border text-right">
        0.00
  </b-col>
</b-row>
<b-row>
  <b-col>
  </b-col>
      <b-col>
          </b-col>
  <b-col class="text-right">
   Difference
  </b-col>
      <b-col class="border text-right">
        0.00
  </b-col>
</b-row>
<div class="border mt-1 mb-1" />

                    <b-table striped hover :items="items" :fields="fields"  :small="true"
                    class="Mx-4 mt-2"
                    >
    <template v-slot:cell(index)="{ index }">
      {{ index + 1 }}
      </template>
                        <template v-slot:cell()="{ item, field: { key }}">
      <b-form-input v-model="item[key]" />
    </template>

        </b-table>
 </b-modal>
</template>

<script>

export default {
  name: 'NewAdjJournal',
  data: () => ({
    fields: [
      {
        key: 'index',
        label: '#'
      },
      'Account No.', 'Account Name', 'Description', 'Debit', 'Credit' /* icon */
    ]
  })
};
</script>
<style scoped>

</style>
