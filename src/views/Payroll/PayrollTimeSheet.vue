<template>
    <div>
        <b-row>
            <b-col cols="2" offset-md="2">
            <h4>Time Sheet</h4>
            </b-col>
                        <b-col class="mb-2">
                <b-button variant="transparent"><feather-icon size="1x" icon="FilePlusIcon" /> New</b-button>
                <b-button variant="transparent"><feather-icon size="1x" icon="SaveIcon" /> Save</b-button>
                <b-button class='mr-4' variant="transparent"><feather-icon size="1x" icon="DeleteIcon" /> Delete</b-button>
            </b-col>
        </b-row>
        <!----Time Sheet Add area--->
                <b-row>
                    <b-col cols="6"><!----leftside-->
                            <b-row>
                    <b-col cols="4" class="text-right mb-4">
            <b>Payroll cycle</b>
                    </b-col>
                    <b-col cols="1.5">
                            <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="text"
        placeholder=""
        autocomplete="off"
      ></b-form-input></b-input-group>
                    </b-col>
                      <b-col>
                       </b-col>
                </b-row>
<!---Date picker Row Main-->
        <b-row>
            <b-col>
                <b-row>
                     <b-col cols="5" class="text-right mb-3">
            <b>Period Start</b>
                    </b-col>
             <b-col cols="7">
              <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="date"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input></b-input-group>
                    </b-col>
                </b-row>
                 <b-row>
             <b-col cols="5" class="text-right mb-3">
            <b>Period Ending</b>
                    </b-col>
             <b-col cols="7">
              <b-input-group>
                   <b-form-input
        id="PaybillVendorInput"
        style="height:30px"
        v-model="value"
        type="date"
        placeholder="YYYY-MM-DD"
        autocomplete="off"
      ></b-form-input></b-input-group>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="3" class="">
                            <div>
  <b-button-group vertical size="sm">
    <b-button size="sm" ><feather-icon  size="1x" icon="ChevronUpIcon" /></b-button>
     <b-button size="sm"><feather-icon  size="1x" icon="ChevronDownIcon" /></b-button>
  </b-button-group>
</div>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="mt-3">
                <h5 style="color:red">SNOW Ariël</h5>
                <div>Total Wage Earned: $1,000,000.00</div>
            </b-col>
        </b-row>

                    </b-col><!--leftSide-->
                <!--Big Box -->
              <b-col>
                            <div>
  <b-card no-body>
    <b-tabs card fill>
      <b-tab title="Overtime" active>
        <b-card-text>
            <b-row>
                <b-col class="border-right">
                    <div style="font-size: 0.9rem;">Maximum Regular Hours Indicator</div>
                    <div class="text-center mt-2"> 8 <a style="color:green">Per Day</a>
                    <b-button class="ml-2" variant="transparent" size="sm">?</b-button>
                    </div>
                    <div class="text-left mt-3" style="font-size: 0.9rem;">
                            <b-form-group
                            label=""
                            v-slot="{ ariaDescribedby }"
                            >
                            <b-form-checkbox-group
                                v-model="selected1"
                                :options="options1"
                                :aria-describedby="ariaDescribedby"
                                name="Overtime-a"
                                stacked
                            ></b-form-checkbox-group>
                            </b-form-group>
                    </div>
                </b-col>
                <b-col>
                              <div class="text-left mt-5" style="font-size: 0.9rem;">
                            <b-form-group
                            label=""
                            v-slot="{ ariaDescribedby }"
                            >
                            <b-form-checkbox-group
                                v-model="selected2"
                                :options="options2"
                                :aria-describedby="ariaDescribedby"
                                name="Overtime-a"
                                stacked
                            ></b-form-checkbox-group>
                            </b-form-group>
                    </div>
                </b-col>
            </b-row>
        </b-card-text>
      </b-tab>
      <b-tab title="Import & Bulk Hours">
        <b-card-text>
            <b-row>
                <b-col cols="3" class="border-right"><!---Leftside buttons-->
                    <b-row class=mt-5>
                        <b-col>
                        <b-btn variant="success">Import Hours</b-btn>
                        </b-col>
                    </b-row>
                    <b-row>
                    </b-row>
                </b-col><!---Leftside buttons-->
                <b-col cols="7" class="border-left"> <!--RightSide-->
                    <b-row class="mb-1">
                        <b-col class="bg-info text-center">
                            <a style="color:white">Quick input of Bulk Hours </a>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="4" style="font-size: 0.9rem;">
                            1) Total Hours
                        </b-col>
                         <b-col cols="5" style="font-size: 0.9rem;">
                                      <b-input-group>
                   <b-form-input
        id="example-input"
        style="height:30px"
        v-model="value"
        type="number"
        placeholder="000.00"
        autocomplete="off"
      ></b-form-input>
      </b-input-group>

                        </b-col>
                         <b-col>
      <b-form-group  v-slot="{ ariaDescribedby }">
      <b-form-radio-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radios-stacked"
        stacked
      ></b-form-radio-group>
    </b-form-group>

                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="3" style="font-size: 0.9rem;">
                            2) Day to use
                        </b-col>
                        <b-col cols="9">
                                      <b-input-group>
                                    <b-form-input
                                    id="example-input"
                                    style="height:30px"
                                    v-model="value"
                                    type="date"
                                    placeholder="YYYY-MM-DD"
                                    autocomplete="off"
                                ></b-form-input>
                                </b-input-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="text-center">
                       <b-btn variant="info">Ok Bulk</b-btn>
                        </b-col>
                    </b-row>
                </b-col><!--RightSide-->
            </b-row>
        </b-card-text>
      </b-tab>
            <b-tab title="TimeSheet Controls">
        <b-card-text>
                            <div class="text-left" style="font-size: 0.9rem;">
                            <b-form-group
                            label=""
                            v-slot="{ ariaDescribedby }"
                            >
                            <b-form-checkbox-group
                                v-model="selected3"
                                :options="options3"
                                :aria-describedby="ariaDescribedby"
                                name="Overtime-a"
                                stacked
                            ></b-form-checkbox-group>
                            </b-form-group>
                    </div>

        </b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
                            </b-col>
        </b-row>
        <!-----------Table----------->
    <b-table striped hover :items="filteredData" :fields="fields" :small="true" class="Mx- mt-1">
        </b-table>
            </div>
</template>
<script>
export default {
  name: 'PayrollTimeSheet',
  data: () => ({
    fields: [
      { label: 'Date' }, 'Reg.', 'OT1', 'OT2', 'Day Earning', 'Cost Center', 'IN-TIME OUT-TIME', 'Shift #', 'Late(Hrs)', 'Break(Hrs)'
    ],
    selected: 'first',
    options: [
      { text: 'Regular', value: 'first' },
      { text: 'Overtime', value: 'second' }
    ],
    selected1: [], // Must be an array reference!
    options1: [
      { text: 'add Hours After Shift End', value: 'Hours After Shift end' },
      { text: 'add Hours before Shift Start', value: 'Hours before Shift start' }
    ],
    selected2: [], // Must be an array reference!
    options2: [
      { text: 'Pay Overtime Only when Approved', value: 'pay Overtime only when approve' }
    ],
    selected3: [], // Must be an array reference!
    options3: [
      { text: 'Use Multiple Cost Center Entry', value: 'multiple cost center' },
      { text: 'Automatic Hours Overtime Breakdown', value: 'Automatic hours breakdown' },
      { text: 'Show daily rates on time card', value: 'Show daiy rates' },
      { text: 'Do NOT calculate Regular Wage where Fix Basic Pay exist', value: 'No Calculate regular wage' },
      { text: 'Duplicate Cost Center on each day worked', value: 'Duplicate Cost Center' }
    ]

  })

};
</script>
