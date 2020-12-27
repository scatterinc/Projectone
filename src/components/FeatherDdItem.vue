<template>
  <b-dropdown-item v-b-modal="modalTarget"
  v-bind="$props" :href="to ? undefined : href || '#'">
    <feather-icon size="1x" :icon="icon"/>
    {{name}}
  </b-dropdown-item>
</template>
<script>
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'feather-dd-item',
  props: ['icon', 'name', 'href', 'to', 'modalTarget'],
  components: { FeatherIcon }
};
</script>
