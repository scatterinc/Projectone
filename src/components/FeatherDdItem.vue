<template>
<<<<<<< HEAD
  <b-dropdown-item v-b-modal="modalTarget"
=======
  <b-dropdown-item v-b-modal="dataModal"
>>>>>>> 006d4e6e89246e13c57a0456bee196e09859236e
                   v-bind="$props"
                   :href="to ? undefined : href || '#'">
    <feather-icon size="1x" :icon="icon"/>
    {{name}}
  </b-dropdown-item>
</template>
<script>

export default {
  name: 'feather-dd-item',
<<<<<<< HEAD
  props: ['icon', 'name', 'href', 'to', 'modalTarget'],
  components: { FeatherIcon }
=======
  props: ['icon', 'name', 'href', 'to', 'dataModal']
>>>>>>> 006d4e6e89246e13c57a0456bee196e09859236e
};
</script>
