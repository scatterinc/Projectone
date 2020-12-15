<template>
  <b-dropdown-item v-b-modal="dataModal"
                   v-bind="$props"
                   :href="to ? undefined : href || '#'">
    <feather-icon size="1x" :icon="icon"/>
    {{name}}
  </b-dropdown-item>
</template>
<script>

export default {
  name: 'feather-dd-item',
  props: ['icon', 'name', 'href', 'to', 'dataModal']
};
</script>
