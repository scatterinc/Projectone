<template>
  <b-modal id="EditingModal" centered :title="title">
    <b-form inline class="d-flex justify-content-center">
      <span class="mr-3" v-text="'Amount'"/>
      <label class="sr-only" for="CashAmount">Cash amount</label>
      <input
          id="CashAmount"
          type="number"
          class="form-control mb-2 mr-sm-2 mb-sm-0 text-right"
          placeholder="0.00"
          v-model="amount"
      />
    </b-form>
    <template v-slot:modal-footer="{ clear, close }">
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="secondary" @click="reset">
        Clear
      </b-button>
      <b-button size="sm" variant="secondary" @click="close('forget')">
        Close
      </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="info" @click="save">
        Save
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import editingModal from '../store/editingModal';
export default {
  name: 'EditingModal',
  computed: {
    title: {
      get () {
        return editingModal.title;
      },
      set (val) {
        editingModal.title = val;
      }
    },
    amount: {
      get () {
        return editingModal.amount;
      },
      set (val) {
        editingModal.amount = val;
      }
    }
  },
  methods: {
    save () {
      editingModal.updater(this.amount);
      editingModal.updater = () => {};
      this.hide();
    },
    reset () {
      this.amount = 0;
      this.save();
    },
    hide () {
      this.$bvModal.hide('EditingModal');
    }
  }
};
</script>
<style>
input[type=number]::-webkit-inner-spin-button {
  position: relative;
  left: .35rem;
}
</style>
