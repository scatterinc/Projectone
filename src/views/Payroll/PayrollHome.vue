<template>
    <div>
        <b-row>
            <b-col>
                <router-view><div></div></router-view>
            </b-col>
            <b-col style="min-height:680px" cols="3" class="bg-light border-left">
                <div class="text-right">
                  <b-form-checkbox v-model="checked"  name="PayrollEmployeecheck-button"  switch>
            </b-form-checkbox></div>
               <div>

  <div><h4 class="mb-2">Directory of Employee</h4></div>
  <b-tree-view  style="color:red" :data="treeData"></b-tree-view>
      </div>
            </b-col>
        </b-row>
    </div>
</template>
<script>

export default {
  name: 'PayrollHome',
  data: () => ({
    checked: true,
    treeData: [{
      id: 2,
      name: 'All',
      children: [{
        id: 3,
        name: 'Monthly',
        children: [{
          id: 4,
          name: 'Manager',
          children: [{
            id: 5,
            name: 'Snow Ariel'
          },
          {
            id: 6,
            name: 'Doe Jane'
          }]
        },
        {
          id: 7,
          name: 'Accountant'
        }]
      },
      {
        id: 8,
        name: 'Fortnight',
        children: [{
          id: 9,
          name: 'Line Cook',
          children: [{
            id: 10,
            name: 'Miguel Rose'
          }]
        }]
      }]

    }]

  })
};
</script>
<style lang="scss">
</style>
