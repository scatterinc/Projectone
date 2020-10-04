<template>
  <b-dropdown variant="transparent" :right="right">
    <template #button-content>
      <span v-if="expanded">
        <feather-icon size="1x" :icon="icon"/>
        {{name}}
      </span>
      <span v-else v-b-tooltip="name">
        <feather-icon size="1x" :icon="icon"/>
      </span>
    </template>
    <template v-for="(item, key) in items">
      <feather-dd-item :name="item.name" :icon="item.icon" v-if="item" :key="key"/>
      <b-dd-divider v-else :key="key"/>
    </template>
  </b-dropdown>
</template>
<script>

import FeatherDdItem from '@/components/FeatherDdItem';
import FeatherIcon from '@/components/FeatherIcon';

export default {
  name: 'DropdownBarItem',
  props: ['name', 'icon', 'items', 'expanded', 'right'],
  components: {
    FeatherDdItem,
    FeatherIcon
  }
};
</script>

<style scoped>

</style>
