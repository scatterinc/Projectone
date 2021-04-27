import Vue from 'vue';

export default Vue.mixin({
  data: () => ({
    timePeriods: [
      'day', 'week', 'month', 'year', 'custom'
    ],
    selectedTimePeriod: 'day'
  })
});
