<template>
  <b-btn-group>
    <b-btn v-for="btn in salesActions"
           :key="btn.text"
           v-text="btn.text"
           @click="btn.action"
    />
  </b-btn-group>
</template>
<script>
export default {
  name: 'sales-actions',
  props: {
    salesActions: {}
  }
};
</script>
