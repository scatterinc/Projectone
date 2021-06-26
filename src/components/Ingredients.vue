<template>
  <b-modal id="Ingredients" size="lg" centered title="Ingredient: Recipe Name">
        <!-----first tab--->
    <div>
      <b-tabs content-class="mt-3" align="left">
               <!-----Second tab--->
        <b-tab title="Ingredients">

<b-row class="mb-2">
      <b-col class="text-center" cols="5"><b>Item </b></b-col>
      <b-col class="text-center" cols="2">Quantity</b-col>
      <b-col class="text-center" cols="2">cost</b-col>
      <b-col class="text-center" cols="2">Ext Cost</b-col>
    </b-row>
    <b-row v-for="item in createOrder.orderItem" :key="item.id" class="mb-2">
      <b-col class="text-center" cols="5">
        <b-input v-model="item.itemName" :disabled="true" />
      </b-col>
      <b-col class="text-center" cols="2">
        <b-form-input
          placeholder="Pull Number"
          type="number"
          min="0"
          v-model="item.quantity"
          v-on:keyup="changedQuantity(item)"
        ></b-form-input>
      </b-col>
      <b-col class="text-center" cols="2">${{ item.cost }}</b-col>
      <b-col class="text-center" cols="2"> ${{ item.totalAmount }} </b-col>
    </b-row>
    <a class="border-top" />
    <b-row class="mb-1">
      <b-col class="text-center" cols="2"><!---blank---></b-col>
      <b-col class="text-center" cols="2"><!---blank---></b-col>
      <b-col class="text-right" cols="4" style="color: red"
        ><b>Total Cost</b></b-col
      >
      <b-col class="text-right" cols="3" style="color: red" placeholder="0.00"
        ><b>${{ createOrder.totalAmountOrderItem }}</b></b-col
      >
    </b-row>
        </b-tab>

      </b-tabs>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'Ingredients.vue',
  data: () => ({
    input: '',
    RecipeExtCost: '',
    text: '',
    selected: 'Yes',
    checked: true,
    options: [
      {
        item: 'Yes',
        name: 'Inventory'
      },
      {
        item: 'No',
        name: 'Non Inventory'
      }
    ],
    changeQuantity: null,
    createOrder: {
      totalAmountOrderItem: null,
      orderItem: [
        {
          id: 1,
          itemName: 'Canon lens 20mm',
          quantity: null,
          cost: 20,
          totalAmount: 0
        },
        {
          id: 2,
          itemName: 'Canon lens 30mm',
          quantity: null,
          cost: 30,
          totalAmount: 0
        },
        {
          id: 3,
          itemName: 'Canon lens 40mm',
          quantity: null,
          cost: 40,
          totalAmount: 0
        },
        {
          id: 4,
          itemName: 'Canon lens 50mm',
          quantity: null,
          cost: 50,
          totalAmount: 0
        },
        {
          id: 5,
          itemName: 'Canon lens 60mm',
          quantity: null,
          cost: 60,
          totalAmount: 0
        }
      ]
    }
  }),
  watch: {},
  methods: {
    loadData () {},
    changedQuantity (item) {
      this.totalAmountItem(item);
    },
    totalAmountItem (item) {
      this.createOrder.orderItem.forEach((element) => {
        if (element.id === item.id) {
          element.quantity = item.quantity;
          element.totalAmount = parseFloat(item.quantity) * item.cost;
          this.createOrder.totalAmountOrderItem += element.totalAmount;
        }
      });
    }
  }
};
</script>

<style scoped>
 ::v-deep .tab-content {
   min-height: 300px;
 }
</style>
