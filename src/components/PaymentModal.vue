<template>
  <b-btn-group>
    <b-btn v-for="btn in modalbtn"
           :key="btn.text"
           v-text="btn.text"
           @click="btn.action"
    />
  </b-btn-group>
</template>
<script>
export default {
  name: 'modal-btn',
  props: {
    modalbtn: {}
  }
};
</script>
