<template>
    <div>
        <b-row>
            <b-col>
                <router-view><div></div></router-view>
            </b-col>
            <b-col cols="3" class="bg-light border-left">
                <div class="text-right">                   <b-form-checkbox v-model="checked"  name="PayrollEmployeecheck-button"  switch>
            </b-form-checkbox></div>
               <div>

  <b-nav v-b-toggle.collapse-1 ><h4 class="mb-2">Directory of Employee</h4></b-nav>
  <!-----Payroll Frequency---->
  <b-collapse id="collapse-1" class="mt-1">
             <b-nav v-b-toggle.collapse-1-inner size="sm">
      <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >    </b-form-checkbox>
                 Monthly</b-nav>
             <!-----Position---->
            <b-collapse id="collapse-1-inner" class="mt-1 ml-3">
                <b-nav class="ml-6" v-b-toggle.collapse-2-inner size="sm">
      <b-form-checkbox
      id="checkbox-2"
      v-model="status"
      name="checkbox-2"
      value="accepted"
      unchecked-value="not_accepted"
    >    </b-form-checkbox>
                    Position</b-nav>
                         <!-----Employee---->
                    <b-collapse id="collapse-2-inner" class="mt-1 ml-5">
                                              <b-nav>
      <b-form-checkbox
      id="checkbox-7"
      v-model="status"
      name="checkbox-7"
      value="accepted"
      unchecked-value="not_accepted">
      <feather-icon size="1x" icon="UserCheckIcon" />Employee Manager
         </b-form-checkbox>
         </b-nav>
                    </b-collapse>
            </b-collapse>
            <!-----Payroll Frequency2---->
            <b-nav v-b-toggle.collapse-3-inner size="sm">
      <b-form-checkbox
      id="checkbox-3"
      v-model="status"
      name="checkbox-3"
      value="accepted"
      unchecked-value="not_accepted"
    >    </b-form-checkbox>
                Fortnightly</b-nav>
             <!-----Position---->
            <b-collapse id="collapse-3-inner" class="mt-1 ml-3">
                <b-nav class="ml-6" v-b-toggle.collapse-4-inner size="sm">
        <b-form-checkbox
      id="checkbox-4"
      v-model="status"
      name="checkbox-4"
      value="accepted"
      unchecked-value="not_accepted"
    >    </b-form-checkbox>
                    Position</b-nav>
                         <!-----Employee---->
                    <b-collapse id="collapse-4-inner" class="mt-1 ml-5">
                        <b-nav>
      <b-form-checkbox
      id="checkbox-5"
      v-model="status"
      name="checkbox-5"
      value="accepted"
      unchecked-value="not_accepted">
      <feather-icon size="1x" icon="UserCheckIcon" />Employee
         </b-form-checkbox>
         </b-nav>
                                 <b-nav>
      <b-form-checkbox
      id="checkbox-6"
      v-model="status"
      name="checkbox-6"
      value="accepted"
      unchecked-value="not_accepted">
      <feather-icon size="1x" icon="UserCheckIcon" />Employee2
         </b-form-checkbox>
         </b-nav>
                    </b-collapse>
            </b-collapse>
  </b-collapse>
</div>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
  name: 'PayrollHome',
  data: () => ({
    checked: true
  })
};
</script>
<style lang="scss">
</style>
