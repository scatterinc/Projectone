<template>
  <b-dropdown variant="transparent" :right="true">
    <template #button-content>
      <span v-if="expanded">
        <feather-icon size="1x" :icon="icon"/>
        {{ selectedPeriod }}
      </span>
      <span v-else v-b-tooltip="name">
        <feather-icon size="1x" :icon="icon"/>
      </span>
    </template>
    <template v-for="(item, key) in items">
      <b-dropdown-item :key="item.id" @click="onPeriodChanged(key)">
        <feather-icon size="1x" :icon="icon"/>
        {{ item.text }}
      </b-dropdown-item>
    </template>
  </b-dropdown>
</template>

<script>
export default {
  name: 'TimePeriodSelector',
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    icon: 'CalendarIcon',
    items: [
      { id: 'day', text: 'Today' },
      { id: 'week', text: 'This week' },
      { id: 'month', text: 'This month' },
      { id: 'year', text: 'This year' },
      { id: 'custom', text: 'Select...' }
    ],
    selectedPeriodIndex: 0
  }),
  computed: {
    selectedPeriod () {
      return this.items[this.selectedPeriodIndex].text;
    }
  },
  methods: {
    onPeriodChanged (index) {
      this.selectedPeriodIndex = index;
      this.$emit('periodChanged', this.items[this.selectedPeriodIndex]);
    }
  }
};
</script>

<style scoped>

</style>
