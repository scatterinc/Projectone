<template>
  <div class="left-sidebar">
    <b-list-group>
      <b-list-group-item :class="{active: route.name === $route.name }"
                         v-for="route in routes"
                         :key="route.path"
                         :to="route.path">
        <feather-icon v-if="route.icon" :icon="route.icon" />
        <span class="ml-3">{{ route.name }}</span>
      </b-list-group-item>
    </b-list-group>
  </div>
  </template>
<script>
import router from '@/router';
import FeatherIcon from '@/components/FeatherIcon';
export default {
  name: 'left-sidebar',
  components: {
    FeatherIcon
  },
  computed: {
    routes () {
      return router.options.routes;
    }
  }
};
</script>
<style lang="scss">
  .left-sidebar {
    .list-group {
      border-radius: 0;
      margin-right: -1px;
    }
    .list-group-item {
      background-color: transparent;
      &:hover {
        background-color: white;
      }
      &.active {
        background-color: var(--secondary);
        color: white;
        border-color: rgba(0,0,0,.125);
      }
    }
  }
</style>
