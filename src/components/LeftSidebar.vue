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
      <b-list-group-item class="custom-nav-item">
        <b-btn v-for="(n, key) in bottomButtons" :key="key"
               variant="light"
               class="mr-0.05 mb-0.05"
               ><feather-icon :icon="n.icon" /><b-tooltip/></b-btn>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import router from '@/router';
import FeatherIcon from '@/components/FeatherIcon';
export default {
  name: 'left-sidebar',
  data: () => ({
    bottomButtons: [{
      icon: 'DatabaseIcon'
    }, {
      icon: 'ServerIcon'
    }, {
      icon: 'GlobeIcon'
    }, {
      icon: 'HardDriveIcon'
    }, {
      icon: 'CloudIcon'
    }, {
      icon: 'FileIcon'
    }, {
      icon: 'HelpCircleIcon'
    }, {
      icon: 'InfoIcon'
    }, {
      icon: 'AlertTriangleIcon'
    }]
  }),
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
    .custom-nav-item {
      height: 200px;
      padding: .75rem .5rem;
    }
  }
</style>
